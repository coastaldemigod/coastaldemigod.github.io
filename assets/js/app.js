
const LEVEL_FACTOR = 0.025

function get_level(xp) {
    return Math.floor(LEVEL_FACTOR * Math.sqrt(xp))
}

function get_month(i) {
    switch (i) {
        case 1: return "jan";
        case 2: return "feb";
        case 3: return "mar";
        case 4: return "apr";
        case 5: return "may";
        case 6: return "jun";
        case 7: return "jul";
        case 8: return "aug";
        case 9: return "sep";
        case 10: return "oct";
        case 11: return "nov";
        case 12: return "dec";
    }
}

function add_comma(x, y) {

    if (x < 1000) {
        if (!y) {
            return x;
        }
        let ret = "";
        if (x < 100) {
            ret += "0";
        }
        if (x < 10) {
            ret += "0";
        }
        return ret + x;
    }

    return add_comma(parseInt(x / 1000), false) + "," + add_comma(x % 1000, true);
}

fetch("https://codestats.net/api/users/coastaldemigod").then((response) => {
    return response.json();
}).then(data => {

    let newXP = data?.new_xp;
    let totalXP = data?.total_xp;

    document.getElementById("codestats").textContent = "Codestats"

    if (newXP && totalXP) {
        let codeXP = document.getElementById("codestats-meta");
        codeXP.innerHTML = `Level ${get_level(totalXP)} | \<a\ href=\"https:\/\/codestats\.net\/users\/coastaldemigod\" target=\"_blank\">${add_comma(totalXP)} XP (+${add_comma(newXP)})\<\/a\>`
    }

    const table = document.getElementById("codestats-table")

    let dates = data?.dates;

    if (dates) {
        for (let i = 0; i <= 12; i++) {
            let row = document.createElement("tr");
            for (let j = 0; j <= 31; j++) {

                let col = document.createElement("td");
                if (j == 0 && i != 0) {
                    col.textContent = get_month(i)
                    col.style.paddingInlineEnd = "10px"
                } else if (i == 0 && j != 0) {
                    col.textContent = j + ""
                    col.style.padding = "2px"
                }
                else {
                    col.style.backgroundColor = "#fd2d78";
                    col.style.color = "#fd2d78";
                    let val = 0;
                    Object.keys(dates).some((key) => {
                        let text = ".*" + (i < 10 ? "0" : "") + i + "-" + (j < 10 ? "0" : "") + j
                        let pattern = new RegExp(text);
                        if (pattern.test(key)) {
                            val = dates[key];
                        }
                    });
                    col.textContent = "hii";
                    col.style.opacity = (val / 99) + "%"
                }

                row.appendChild(col)
            }
            table.appendChild(row)
        }
    }

    const lang = document.getElementById("lang");

    let li = document.createElement("li");

    let languages = data?.languages;

    if (languages) {
        let langArr = Object.keys(languages).map(x => {
            return {
                lang: x,
                xps: languages[x].xps
            }
        }).sort((a, b) => {
            if (a.xps === b.xps) {
                return 0;
            }
            return (a.xps > b.xps) ? -1 : 1;
        }).slice(0, 10);

        langArr.forEach(x => {
            li.textContent += ` ${x.lang} Level ${get_level(x.xps)}`
        })
        // lang.appendChild(li);
    }

})
