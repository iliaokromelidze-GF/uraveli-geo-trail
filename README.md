# გეოლოგიური მარშრუტის GitHub Pages შაბლონი

ეს არის მარტივი სტატიკური გვერდი, რომელიც შეგიძლია GitHub Pages-ზე ატვირთო და შემდეგ ecotourism.ge-ზე ბმულად ან iframe-ით ჩასვა.

## ფაილები

- `index.html` - გვერდის შინაარსი
- `style.css` - დიზაინი
- `images/` - ფოტოების საქაღალდე

## როგორ გამოიყენო

1. შექმენი GitHub-ზე ახალი repository, მაგალითად `geo-route`.
2. ატვირთე ეს ფაილები repository-ში.
3. დაამატე ფოტოები `images` საქაღალდეში.
4. `index.html`-ში შეცვალე placeholder ტექსტები შენი ტექსტებით.
5. Google My Maps-ის embed ბმული ჩასვი რუკის `iframe`-ის `src`-ში.
6. YouTube ვიდეოს ID ჩასვი `https://www.youtube.com/embed/VIDEO_ID`-ის ნაცვლად.
7. GitHub-ში გახსენი `Settings` -> `Pages`.
8. Source აირჩიე `Deploy from a branch`, branch `main`, folder `/root`.

რამდენიმე წუთში გვერდი იქნება მისამართზე:

```text
https://YOUR_USERNAME.github.io/REPOSITORY_NAME/
```

## ecotourism.ge-ზე ჩასმა

ბმულად:

```html
<a href="https://YOUR_USERNAME.github.io/REPOSITORY_NAME/" target="_blank">
  გეოლოგიური მარშრუტის ნახვა
</a>
```

iframe-ით:

```html
<iframe
  src="https://YOUR_USERNAME.github.io/REPOSITORY_NAME/"
  width="100%"
  height="900"
  style="border:0;"
  loading="lazy">
</iframe>
```
