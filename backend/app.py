import http.client

conn = http.client.HTTPSConnection("tasty.p.rapidapi.com")

headers = {
    'X-RapidAPI-Key': "aec98ea084msh883e245eb606a53p1e346djsnc1c68e020057",
    'X-RapidAPI-Host': "tasty.p.rapidapi.com"
}

conn.request("GET", "/recipes/auto-complete?prefix=chicken%20soup", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
