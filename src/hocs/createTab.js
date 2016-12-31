import ui from 'redux-ui'
import Tab from 'components/Tab'

const createTab = (key, activeTab = 0) => (
  ui({
    key,
    state: {
      activeTab,
    },
  })(Tab)
)

export default createTab
