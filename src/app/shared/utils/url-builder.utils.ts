import {Url} from 'url';

export class UrlBuilder {
  DEFAULT_PROTOCOL = 'https';
  PATH_SEPARATOR = '/';
  KEY_VALUE_SEPARATOR = '=';
  PARAMETERS_BEGINNING_CHAR = '?';
  PARAMETERS_SEPARATOR = '&';

  url: URL;
  parametersAndValues: Map<string, string> = new Map<string, string>();

  constructor(host: string,
              protocol: string = null) {
    protocol = protocol ? protocol : this.DEFAULT_PROTOCOL;

    host = protocol + '://' + host;
    this.url = new URL(host);
  }

  public setPath(path: string, base?: string): void {
    if (base === undefined) {
      this.url.pathname = path;
    } else {
      base = base.endsWith('/') ? base : base + '/';
      this.url.pathname = base + path;
    }
  }

  public setParameters(params: Map<string, string>) {
    this.parametersAndValues = params;
  }

  public toString(): string {
    const params = [];
    for (const k of this.parametersAndValues.keys()) {
      params.push(k + this.KEY_VALUE_SEPARATOR + this.parametersAndValues.get(k));
    }

    return this.url.toString() + this.PARAMETERS_BEGINNING_CHAR + params.join(this.PARAMETERS_SEPARATOR);
  }
}
