import axios from "./axios"


export const getExhibitionById = async (id) => {
    try {
        const response = await axios.get(`/Exhibition/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }

}
// ---------Translation Eng To Arabic-----------------------
export const getLabels = async ({
  pageNo,
  pageName,
  sectionNo,
  sectionName,
  labelNo,
  resourceKey,
}) => {
  try {
    const response = await axios.post("/Language/FetchLabels", null, {
      params: {
        PageNo: pageNo,
        PageName: pageName,
        SectionNo: sectionNo,
        SectionName: sectionName,
        LabelNo: labelNo,
        ResourceKey: resourceKey,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// ---------Fetch all Home page labels for HeroSlider-----------------------
export const fetchHomeLabels = async () => {
  try {
    const response = await axios.post("/Language/FetchLabels", null, {
      params: {
        PageNo: 1,
        PageName: "Home",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching home labels:", error);
    throw error;
  }
};
