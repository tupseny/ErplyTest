import {UrlBuilder} from './url-builder.utils';

describe('UrlBuilderUtils', () => {
  const host = 'test.host.com';

  it('should be defined', () => {
    const url = new UrlBuilder(host);
    expect(url).toBeDefined();
  });

  it('should be base url', () => {
    const url = new UrlBuilder(host);
    expect(url.toString()).toBe('https://' + host + '/?');
  });

  it('should be url with path', () => {
    const url = new UrlBuilder(host);
    url.setPath('path1/path2');
    expect(url.toString()).toBe('https://' + host + '/path1/path2?');
  });

  it('should be url with path (generated using base path)', () => {
    const url = new UrlBuilder(host);
    url.setPath('path2', 'path1');
    expect(url.toString()).toBe('https://' + host + '/path1/path2?');
  });

  it('should be url with parameter', () => {
    const url = new UrlBuilder(host);
    url.setParameters(new Map([
      ['param1', 'value1'],
      ['param2', 'value2']
    ]));
    expect(url.toString()).toBe('https://' + host + '/?param1=value1&param2=value2');
  });

  it('should be url with path and params', () => {
    const url = new UrlBuilder(host);
    url.setPath('path2', 'path1');

    url.setParameters(new Map([
      ['param1', 'value1'],
      ['param2', 'value2']
    ]));
    expect(url.toString()).toBe('https://' + host + '/path1/path2?param1=value1&param2=value2');
  });
});
