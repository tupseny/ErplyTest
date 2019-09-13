export class Utils {
  public static parseDate(d: string) {
    if (!(typeof d === 'string')) return null;

    const dateMatcher = new RegExp(/\d{4}-\d{2}-\d{2}/);

    const dateStr = d.match(dateMatcher)[0];
    return new Date(dateStr);
  }
}
