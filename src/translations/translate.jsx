import { FormattedMessage } from "react-intl";

const translate = (id, values) => (
  <FormattedMessage id={id} values={{ ...values }} />
);

export default translate;
