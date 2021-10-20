import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import {PageContainer} from './StyledComponents'
import Travel from './components/Travel'
import './App.css'

// Replace your code here
class App extends Component {
  state = {status: 'progress', list: []}

  componentDidMount() {
    console.log('okkkk')
    this.getList()
  }

  loader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  updateList = data => {
    //  console.log(data.packages)
    const update = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_Url,
      description: each.description,
    }))

    // console.log(update)

    this.setState({status: 'success', list: update})
  }

  getList = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    console.log(response.json())
    if (response.ok === true) {
      this.updateList(data)
    }
  }

  success = () => {
    const {list} = this.state
    console.log('list')
    return (
      <ul>
        {list.map(each => (
          <Travel key={each.id} list={each} />
        ))}
      </ul>
    )
  }

  loadingStatus = () => {
    const {status} = this.state
    console.log(status)
    switch (status) {
      case 'progress':
        return this.loader()
      case 'success':
        return this.success()
      default:
        return ''
    }
  }

  render() {
    console.log('start')
    return (
      <PageContainer>
        <h1>Travel Guide</h1>
        {this.loadingStatus()}
      </PageContainer>
    )
  }
}

export default App
