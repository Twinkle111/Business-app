import { BusinessList } from "./Component/BusinessList";
import { connect } from "react-redux";
import { SET_BUSINESS_LIST, SET_SELECTED_BUSINESS } from "./Action";
import { AppContainer } from "./Styles/globalStyles";

function App(props) {
  return (
    <AppContainer>
      <BusinessList
        businessList={props.businessList}
        setBusinessList={props.setBusinessList}
        selectedBusiness={props.selectedBusiness}
        setSelectedBusiness={props.setSelectedBusiness}
      />
    </AppContainer>
  );
}

const mapStateToProps = (state) => ({
  businessList: state.appReducer.businessList,
  selectedBusiness: state.appReducer.selectedBusiness,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    setBusinessList: (list) => dispatch({ type: SET_BUSINESS_LIST, list }),
    setSelectedBusiness: (details) =>
      dispatch({ type: SET_SELECTED_BUSINESS, details }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
