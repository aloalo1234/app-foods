app.use(express.static("./dist/food-app"));

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: './dist/food-app'}
);
});

app.listen(process.env.PORT || 8080);