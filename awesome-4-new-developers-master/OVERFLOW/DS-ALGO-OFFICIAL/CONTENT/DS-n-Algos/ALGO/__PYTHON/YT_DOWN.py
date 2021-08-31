import pafy

url = "https://www.youtube.com/watch?v=OE7wUUpJw6I&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A"
video = pafy.new(url)
print(video.title)

stream = pafy.new(url).streams

best = video.getbest()
for i in stream:
    print(i)

print(best.resolution, best.extension)
print(best.url)
best.download(quiet=False)
