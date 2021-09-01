import { render } from "@testing-library/react";
import App from "../src/app/App"
import AboutPage from "../src/components/about/AboutPage";
import CurrentNews, { CurrentNewsProps } from "../src/components/details/CurrentNews";
import ErrorComponent, { ErrorComponentProps } from "../src/components/main_page/news_block/ErrorComponent";
import NotFound from "../src/components/not_found/NotFound";
import { FixBug } from "../src/components/share/SearchBar";
import { NewsIns } from "../src/model/News";
import { paginationUtil } from "../src/utils/PaginationUtil";
import { storageUtil } from "../src/utils/StorageUtil";

const newsIns: NewsIns ={
    source: { id: 1, name: 'hello' },
    author: 'Mark',
    title: 'Mark`s news',
    description: 'awesome history',
    url: 'localhost:8888',
    urlToImage: '',
    publishedAt: '20.12.2020',
    content: 'joke!!'
}


test('paginationUtil should return 10', () => {
    expect(10).toBe(paginationUtil.getLastPage(10, 100));
});

test('test app', (): void => {
    const el = render(App());
    const div = el.getAllByText('React Redux');
    expect(1).toBe(div.length);
})

test('about Page text should return 1', (): void => {
    const el = render(AboutPage());
    const div = el.getAllByText('About page');
    expect(1).toBe(div.length);
});

test('Not found Page text should return text "not-found"', (): void => {
    const el = render(NotFound());
    const div = el.getByTestId('not_found')
    let st = div.className;
    expect(st).toBe('not-found');
});

test('CurrentNews text should return "Published: 20.12.2020"', (): void => {
    const props: CurrentNewsProps = {
        news: newsIns
    }
    const el = render(CurrentNews(props));
    const div = el.getByTestId('published');
    expect('Published: 20.12.2020').toBe(div.textContent);
});

test('ErrorComponent text should return "Error status : 500" ', (): void => {
    const props: ErrorComponentProps = {
        error: {
            error: true,
            code: 500,
            message: 'problems'
        }
    }
    const el = render(ErrorComponent(props));
    const selectElement = el.getByText('Error status : 500')
    expect('Error status : 500').toBe(selectElement.textContent);
});

test('StorageUtil should return null ', (): void => {
    expect(storageUtil.getNewsFromLocalStorage()).toBeNull();
    expect(storageUtil.getSearchParams()).toBeNull();
});

it('ErrorComponent text should return "Error status : 500" ', (): void => {
    const el = render(FixBug());
    const div = el.getByTestId('search_button');
    expect(div.textContent).toBe('Searching');
});

