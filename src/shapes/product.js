import { PropTypes } from 'react'

const productShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  purposeType: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  interestRate: PropTypes.number.isRequired,
  fine: PropTypes.number.isRequired,
}

export default productShape
