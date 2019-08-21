import React, { Component } from 'react'
import CardTemplate from '../CardTemplate/CardTemplate'
import { Row, Col, Rate, Tag } from 'antd'
import uuidv4 from 'uuid/v4'
import './Showfilms.css'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loadAllMovies}from "../../actions/prod";


class Showfilms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
        mov:[]
    }
  }




  componentDidMount () {
      this.props.loadAllMovies();

  }

  render () {
      const listeMov=this.props.p;
      console.log(listeMov);
    return (
      <div>
        <Row>
          <Col span={12} offset={6}>
            <h1 className='title'>{ this.props.currentPage } </h1>
          </Col>
        </Row>
        <Row gutter={24}>
          {
            listeMov.p.map(film => {
                console.log(listeMov);
                console.log(film.title);

              return (
                <Col className='gutter-row' span={5} offset={1} key={uuidv4()}>
                  <CardTemplate
                    title={film.title}
                    category={film.category}
                    likes={film.likes}
                    dislikes={film.dislikes}
                    image={film.poster_path}
                    id={film.id}
                  />
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }
}

Showfilms.propTypes={
    loadAllMovies: PropTypes.func.isRequired,
    p: PropTypes.object.isRequired
};

const mapStateToProps = state => {


    return {p:state.p}
};

export default connect(mapStateToProps,{loadAllMovies})(Showfilms);