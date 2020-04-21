import gql from 'graphql-tag';

export const SUBMIT_PRODUCT_REVIEW = gql`
    mutation SubmitProductReview($input: SubmitProductReviewInput!) {
        submitProductReview(input: $input) {
            authorLocation
            authorName
            body
            createdAt
            downvotes
            id
            rating
            quality
            pricevalue
            comfort
            response
            responseCreatedAt
            state
            summary
            updatedAt
            upvotes
        }
    }
`;
