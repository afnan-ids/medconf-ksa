export async function languageFetch(PageNo, PageName,SectionNo,SectionName,LabelNo,ResourceKey, options = {}) {
    let url = "/Language/FetchLabels?";

    if (PageNo) {
        url += `PageNo=${PageNo}&`;
    }
    if (PageName) {
        url += `PageName=${PageName}&`;
    }
    if (SectionNo) {
        url += `SectionNo=${SectionNo}&`;
    }
    if (SectionName) {
        url += `SectionName=${SectionName}&`;
    }
    if (LabelNo) {
        url += `LabelNo=${LabelNo}&`;
    }
    if (ResourceKey) {
        url += `ResourceKey=${ResourceKey}`;
    }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    options
  );

  if (!response.ok) {
    console.log("API fetch failed:", response);
  }

  return response.json();
}