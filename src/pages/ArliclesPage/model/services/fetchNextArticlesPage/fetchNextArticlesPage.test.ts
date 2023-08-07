import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchNextArticlesPage} from "../fetchNextArticlesPage/fetchNextArticlesPage";
import {fetchArticlesList} from "../../services/fetchArticlesList/fetchArticlesList";

jest.mock('../fetchArticlesList/fetchArticlesList')

describe("fetchNextArticlesPage.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids:[],
                entities:{},
                limit: 5,
                isLoading: false,
                hasMore: true
            }
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({});
    });
    test("fetchArticlesList not called", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids:[],
                entities:{},
                limit: 5,
                isLoading: false,
                hasMore: false
            }
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
    test("fetchArticlesList isLoading true", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids:[],
                entities:{},
                limit: 5,
                isLoading: true,
                hasMore: true
            }
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
