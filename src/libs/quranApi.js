async function getResponse(url: string, method = "GET", body: any = {}) {
  const response = await fetch("http://api.alquran.cloud/v1" + url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: body,
  });
  return await response.json();
}

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
