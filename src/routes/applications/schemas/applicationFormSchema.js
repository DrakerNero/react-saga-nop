import buildSchema from 'redux-form-schema'
import personalInfoFieldDefs from './personalInfoFieldDefs'
import incomeInfoFieldDefs from './incomeInfoFieldDefs'
import loanDetailFieldDefs from './loanDetailFieldDefs'
import verifyDocumentFieldDefs from './verifyDocumentFieldDefs'
import analyseLoanFieldDefs from './analyseLoanFieldDefs'

const schema = {
  ...personalInfoFieldDefs,
  ...incomeInfoFieldDefs,
  ...loanDetailFieldDefs,
  ...verifyDocumentFieldDefs,
  ...analyseLoanFieldDefs,
}

export default buildSchema(schema)
