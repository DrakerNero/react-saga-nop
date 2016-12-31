import {
  ANALYST_OPINION,
  ANALYST_SUGGESTED_AMOUNT,
  APPROVER_OPINION,
  APPROVER_AMOUNT,
} from 'texts'

export default {
  analystOpinion: { label: ANALYST_OPINION, required: true },
  analystSuggestedAmount: { label: ANALYST_SUGGESTED_AMOUNT, type: 'numeric', required: true },
  approverOpinion: { label: APPROVER_OPINION, required: true },
  approverAmount: { label: APPROVER_AMOUNT, type: 'numeric', required: true },
}
