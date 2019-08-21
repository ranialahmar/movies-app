import React, { Component } from 'react'
import { Table, Col, Row } from 'antd'
import uuidv4 from 'uuid/v4'
import {connect} from 'react-redux';


import PropTypes from 'prop-types';
import {loadAllCategories}from "../../actions/category";
import {movies$} from "../../data/movies";

class ListTable extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.props.loadAllCategories();
    console.log(movies$);
    movies$.then(
        (res)=>{this.setState({
          data:res.map(movie=>({
            key:uuidv4(),
            title:movie.title,
            category:movie.category
          }))});
          console.log(res);}
    );
  }

  render () {

    const listeCat=this.props.cat;
    const columns = [{
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length
    }, {
      title: 'Category',
      dataIndex: 'category',
      filters: listeCat.cat,
      filterMultiple: true,
      sorter: (a, b) => a.genres.length - b.genres.length
    }]

    return (
      <Row>
        <Col span={13} offset={5}>
          <Table columns={columns} dataSource={this.state.data} />
        </Col>
      </Row>
    )
  }
}
ListTable.propTypes={
  loadAllCategories: PropTypes.func.isRequired,
  cat: PropTypes.object.isRequired
};

const mapStateToProps = state => {


  return {cat:state.cat }
};

export default connect(mapStateToProps,{loadAllCategories})(ListTable);