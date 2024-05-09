import { createSlice } from "@reduxjs/toolkit";

const sortTypes = [
  {status: 'oneFlat', title: 'Одноэтажный'}, 
  {status: 'withMansard', title: 'С мансардой'}, 
  {status: 'twoFlat', title: 'Двухэтажный'},
  {status: 'withCokol', title: 'C цокольным этажом'},
  {status: 'threeFlat', title: 'Трехэтажные'},
  {status: 'withPanarams', title: 'С панорамными окнами'},
  {status: 'withGarage', title: 'С гаражом'},
  {status: 'frame', title: 'Каркасный'}, 
  {status: 'all', title: 'Все'}   
]

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: 'all',
  },
  reducers: {
    setStatusForFilter: (state, action) => {
      // for (let st of sortTypes){
      //   if (st.status === action.payload.filterType){
      //     state.filter = st.title;
      //   }
      // }
      
      state.filter = sortTypes.filter(houseType => 
        action.payload.filterType === houseType.status)[0].title; 
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStatusForFilter } = filterSlice.actions;

export default filterSlice.reducer;