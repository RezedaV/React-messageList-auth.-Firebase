import {
    GET_ARTICLES_SUCCESS,
    getArticles,
    getArticlesFailure,
    getArticlesRequest,
    getArticlesSuccess
} from "../actions";

describe('getArticlesSuccess test', () => {
    it('returns obj with type and payload', () => {
        const payload = [];
        const expected = {
            type:GET_ARTICLES_SUCCESS,
            payload,
        };
        const received = getArticlesSuccess(payload);
        expect(expected).toEqual(received);
    });
});

describe('getArticles test', () => {
    it('calls fn as an arg with getArticlesReq', () => {
        const mockDispatch = jest.fn();
        getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest())
    })
    it('calls fn passed as an arg.with getArticlesSuc if fetch was successful', async () => {
        const mockDispatch = jest.fn();
        const result = ['test'];
        fetchMock.mockResponseOnce(JSON.stringify(result));
        await getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(result));
    })
    it('calls fn passed as an arg.with getArticlesFail if fetch was successful', async() => {
        const mockDispatch = jest.fn();
        const error = new Error('some fetch error');
        fetchMock.mockRejectOnce(error);
        await getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesFailure(error));
    })
})

