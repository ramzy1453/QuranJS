class QuranApi {
  async getMeta() {
    return await getResponse("/meta");
  }
  async getSourate({
    sourateID,
    translation,
  }: {
    sourateID: string | number;
    translation: string;
  }) {
    return await getResponse(`/surah/${sourateID}${translation}`);
  }
}

export default new QuranApi();
