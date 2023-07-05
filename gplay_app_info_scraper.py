import requests, orjson


def get_app(id, lang):
    data = requests.get("https://play.google.com/store/apps/details?id=" + id + "&hl=" + lang, 
    headers={"User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:111.0) Gecko/20100101 Firefox/111.0.2", "Referrer": "play.google.com"})
    data = orjson.loads(data.text.split("AF_initDataCallback({key: 'ds:5',")[1].split("data:")[1].split(", sideChannel")[0])[1][2]
    version = data[140][0][0][0]
    description = data[144][1][1].replace("<br>", "\n")
    updated = data[145][0][0]
    name = data[0][0]
    icon = data[95][0][3][2]
    print(name, f"({version}) {updated}", "\n\n", description, "\n\nicon link", icon)

get_app(input("enter app id\n> "), input("enter language code\n> "))
