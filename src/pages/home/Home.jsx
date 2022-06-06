import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="students" />
          <Widget type="classes" />
          <Widget type="attendance rate" />
          <Widget type="balance" />
        </div>

        <div className="charts">
        <Featured title="Class Average GPA" aspect={2 / 1}/>
          <Chart title="Overall Performance" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Module Attendance</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
