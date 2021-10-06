import gql from "graphql-tag";

export default gql`
    query UserSettingsQuery($user_id: Integer!) {
        userSettingsQuery(user_id: $user_id) {
            setting_name,
            setting_value
        }
    }
`;