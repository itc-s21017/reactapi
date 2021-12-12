const [data, setData] = useState({})
const uri = 'https://opendata.corona.go.jp/api/Covid19JapanAll?date=20201125'
useEffect(() => (
  window.fetch(uri)
    .then(res => res.json())
    .then(console.log)

), [])
