import React, { Component } from "react";
import {Bar, Pie} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import {Container, Row, Col, Modal, TextInput, Button, Icon, Table} from 'react-materialize';
import DatePicker from "react-datepicker";
import API from "../../utils/API";
import withAuth from './../../components/withAuth';
import moment from "moment";

// CSS
import "react-datepicker/dist/react-datepicker.css";
import './Day.css';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import Tab from "react-materialize/lib/Tab";

// Images
const workoutImg = "./assets/images/workout1.jpg";
const waterImg = "./assets/images/water1.jpg";
const sleepImg = "./assets/images/sleep1.jpg";
const nutritionImg = "./assets/images/nutrition1.jpg";
const backgroundImg ='./assets/images/background1.jpg';


class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      sleepCounter: 6,
      targetSleep: 8,
      workoutCounter: 2,
      targetWorkout: 2,
      waterCounter: 1,
      targetWater: 12,
      proteinCounter: 90,
      carbsCounter: 50,
      fatCounter: 40,
      caloriesCounter: 1500,
      maxCalories:  2000,
      date: new Date(),
      dateString: moment().format("YYYY-MM-DD"),
      intake_progress: []
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.addOneHourS = this.addOneHourS.bind(this);
    this.subOneHourS = this.subOneHourS.bind(this);
    this.addOneHourW = this.addOneHourW.bind(this);
    this.subOneHourW = this.subOneHourW.bind(this);
    this.addOneWater = this.addOneWater.bind(this);
    this.subOneWater = this.subOneWater.bind(this);
    this.exerciseFindAndUpdate = this.exerciseFindAndUpdate.bind(this);
    this.dateDecrement = this.dateDecrement.bind(this);
    this.dateIncrement = this.dateIncrement.bind(this);
    this.getMeals = this.getMeals.bind(this);
  }

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState(
        {
          id: res.data._id,
          name: res.data.name,
          age: res.data.age,
          weight: res.data.weight,
          height: res.data.height,
          gender: res.data.gender,
          activity: res.data.activity,
          BMI: res.data.BMI,
          targetWater: res.data.water_goal,
          targetCalories: res.data.intake_goal,
          targetWorkout: res.data.exercise_goal,
          targetSleep: res.data.sleep_goal,
          water_progress: res.data.water_progress,
          exercise_progress: res.data.exercise_progress,
          intake_progress: res.data.intake_progress,
          sleep_progress: res.data.sleep_progress,
          sleepCounter: this.findMetric(res.data.sleep_progress, moment().format('YYYY-MM-DD'), null, false, false).metric,
          workoutCounter: this.findMetric(res.data.exercise_progress, moment().format('YYYY-MM-DD'), null, false, false).metric,
          waterCounter: this.findMetric(res.data.water_progress, moment().format('YYYY-MM-DD'), null, false, false).metric,
          caloriesCounter: this.findMetric(res.data.intake_progress, moment().format('YYYY-MM-DD'), null, false, true).metric[0],
          proteinCounter: this.findMetric(res.data.intake_progress, moment().format('YYYY-MM-DD'), null, false, true).metric[1],
          fatCounter: this.findMetric(res.data.intake_progress, moment().format('YYYY-MM-DD'), null, false, true).metric[2],
          carbsCounter: this.findMetric(res.data.intake_progress, moment().format('YYYY-MM-DD'), null, false, true).metric[3],
          caloriesInput: null,
          proteinInput: null,
          fatInput: null,
          carbsInput: null,
          maxCalories: res.data.intake_goal
        }
      );
      console.log(res.data);
      console.log(moment().subtract(10,"days").format("YYYY-MMDD"));
      console.log(this.state);
    });
  };

  dateDecrement() {
    var newDate = this.state.date;
    newDate.setDate(newDate.getDate()-1);
    this.handleDateChange(newDate);
  }

  dateIncrement() {
    var newDate = this.state.date;
    newDate.setDate(newDate.getDate()+1);
    console.log(newDate.toDateString())
    this.handleDateChange(newDate);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date,
      date: date,
      dateString: moment(date).format("YYYY-MM-DD"),
      sleepCounter: this.findMetric(this.state.sleep_progress, moment(date).format('YYYY-MM-DD'), null, false, false).metric,
      workoutCounter: this.findMetric(this.state.exercise_progress, moment(date).format('YYYY-MM-DD'), null, false, false).metric,
      waterCounter: this.findMetric(this.state.water_progress, moment(date).format('YYYY-MM-DD'), null, false, false).metric,
      caloriesCounter: this.findMetric(this.state.intake_progress, moment(date).format('YYYY-MM-DD'), null, false, true).metric[0],
      proteinCounter: this.findMetric(this.state.intake_progress, moment(date).format('YYYY-MM-DD'), null, false, true).metric[1],
      fatCounter: this.findMetric(this.state.intake_progress, moment(date).format('YYYY-MM-DD'), null, false, true).metric[2],
      carbsCounter: this.findMetric(this.state.intake_progress, moment(date).format('YYYY-MM-DD'), null, false, true).metric[3]
    });
  }

  addOneHourS() {
    this.setState((prevState) => {
      return {
        sleepCounter : prevState.sleepCounter + 1
        };
     },
     () => {
     this.findMetricAndUpdate(this.state.sleepCounter, 'sleep_progress', this.state.dateString);
     });
  }

  subOneHourS() {
    this.setState((prevState) => {
      return {
        sleepCounter: prevState.sleepCounter === 0 ? prevState.sleepCounter: prevState.sleepCounter - 1
        };
     },
     () => {
     this.findMetricAndUpdate(this.state.sleepCounter, 'sleep_progress', this.state.dateString);
     });
  }

  addOneHourW() {
    this.setState((prevState) => {
      return {
        workoutCounter : prevState.workoutCounter + 1
        };
     },
     () => {
     this.findMetricAndUpdate(this.state.workoutCounter, 'exercise_progress', this.state.dateString);
     });
  }

  subOneHourW() {
    this.setState((prevState) => {
      return {
        workoutCounter: prevState.workoutCounter === 0 ? prevState.workoutCounter: prevState.workoutCounter - 1
        };
     },
     () => {
     this.findMetricAndUpdate(this.state.workoutCounter, 'exercise_progress', this.state.dateString);
     });
  }

  addOneWater() {
    this.setState((prevState) => {
      console.log(this.state.waterCounter);
      return {
        waterCounter : prevState.waterCounter + 1
        };
        
     },
     () => {
     this.findMetricAndUpdate(this.state.waterCounter, 'water_progress', this.state.dateString);
     });
  }

  subOneWater() {
    this.setState((prevState) => {
      return {
        waterCounter: prevState.waterCounter === 0 ? prevState.waterCounter: prevState.waterCounter - 1
        };
     },
     () => {
     this.findMetricAndUpdate(this.state.waterCounter, 'water_progress', this.state.dateString);
     });
  }

  findMetric(progressArr, dateString, metric, updateMetric, isIntake) {
    var foundDate = false;
    var progressArrCopy = progressArr;
    var metricOfInterest = metric || 0;

    for(var i = progressArrCopy.length-1; i >= 0; i--){
      if (dateString === progressArrCopy[i].date_string){
        foundDate = true;
        if (!isIntake){
          if (updateMetric){
            progressArrCopy[i].metric = metric;
          }
          metricOfInterest = progressArrCopy[i].metric;
        }
        else {
          if(updateMetric){
            var old_cals = progressArrCopy[i].calories || 0;
            var old_protein = progressArrCopy[i].protein || 0;
            var old_fat = progressArrCopy[i].fat || 0;
            var old_carbs = progressArrCopy[i].carbs || 0;

            progressArrCopy[i].calories = metric[0] + old_cals;
            progressArrCopy[i].protein = metric[1] + old_protein;
            progressArrCopy[i].fat = metric[2] + old_fat;
            progressArrCopy[i].carbs = metric[3] + old_carbs;
            progressArrCopy[i].caloriesArr.push(metric[0]);
            progressArrCopy[i].proteinArr.push(metric[1]);
            progressArrCopy[i].fatArr.push(metric[2]);
            progressArrCopy[i].carbsArr.push(metric[3]);
            progressArrCopy[i].food.push(this.state.meal);
          }
          metricOfInterest = [progressArrCopy[i].calories, progressArrCopy[i].protein, progressArrCopy[i].fat, progressArrCopy[i].carbs];
        }
        break;
      }
      else if (dateString >= progressArr[i]){
        break;
      }
    }
    if (isIntake && !foundDate){
      metricOfInterest = [0,0,0,0];
    }
    console.log({foundDate: foundDate, isIntake: isIntake, arr: progressArrCopy, metric: metricOfInterest});
    return {foundDate: foundDate, isIntake: isIntake, arr: progressArrCopy, metric: metricOfInterest};
  }

  findMetricAndUpdate(metric, metricName, dateString) {
    var progressArr = this.state[metricName];
    var findData = {};
    
    if (metricName != 'intake_progress'){
      findData = this.findMetric(progressArr, dateString, metric, true, false);
    }
    else {
      findData = this.findMetric(progressArr, dateString, metric, true, true);
    }
    var arrCopy = findData.arr;
    console.log(findData);
    console.log(arrCopy);

    if (!findData.foundDate && !findData.isIntake) {
      arrCopy.push({"metric": metric, "date": this.state.date, "date_string": dateString});
    }
    else if (!findData.foundDate) {
      arrCopy.push({"calories": metric[0], "protein": metric[1], "fat": metric[2], "carbs": metric[3], "caloriesArr": [metric[0]], "proteinArr": [metric[1]], "fatArr": [metric[2]], "carbsArr": [metric[3]], "food": [this.state.meal], "date": this.state.date, "date_string": this.state.dateString});
    }

    this.setState({
      metricName: arrCopy
    });
    console.log(this.state);

    var resData = {};
    resData[metricName] = arrCopy;
    console.log(resData);

    API.updateUser(this.props.user.id, resData);
  };

  exerciseFindAndUpdate(event){
    event.preventDefault();
    const meal = this.state.meal;
    API.getFoodInfo(meal)
    .then(res => {
      this.findMetricAndUpdate([
        parseInt(this.state.caloriesInput || res.data.parsed[0].food.nutrients.ENERC_KCAL) || 0, 
        parseInt(this.state.proteinInput || res.data.parsed[0].food.nutrients.PROCNT) || 0,
        parseInt(this.state.fatInput || res.data.parsed[0].food.nutrients.FAT) || 0,
        parseInt(this.state.carbsInput || res.data.parsed[0].food.nutrients.CHOCDF) || 0],
        "intake_progress",
        this.state.dateString
        );
        window.location.reload();
    });
  };

  getMeals(){
    var table = [];
    // try{
    if (this.state.intake_progress.length > 0){
    for (var i = this.state.intake_progress.length-1; i >=0; i--){
      if (this.state.dateString === this.state.intake_progress[i].date_string){
        for (var j = 0; j < this.state.intake_progress[i].food.length; j++){
          let children = [];
          children.push(<td>
            {this.state.intake_progress[i].food[j]}
            </td>);
          children.push(<td>
            {this.state.intake_progress[i].caloriesArr[j]}
            </td>);
          children.push(<td>
            {this.state.intake_progress[i].proteinArr[j]}
            </td>);
          children.push(<td>
            {this.state.intake_progress[i].fatArr[j]}
            </td>);
          children.push(<td>
            {this.state.intake_progress[i].carbsArr[j]}
            </td>);
          table.push(
            <tr>
              {children}
            </tr>
          );
        }
        break;
      }
    }
    }
  // }
  // finally{
    if (table.length > 0){
      return (
        <Table>
          <caption>Today's Meals</caption>
          <thead>
            <th>
              Food
            </th>
            <th>
              Calories
            </th>
            <th>
              Protein
            </th>
            <th>
              Fat
            </th>
            <th>
              Carbs
            </th>
          </thead>
          <tbody>
            {table}
          </tbody>
        </Table>
      );
    } else {
      return;
    }
  // }
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
    console.log(this.state);
  };
  
  render() {
    return (
      <div className="mainWrapper" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Container className="containerDay">
          <Row>
            <Col className="s2 offset-s5 black-text center-align">
              Daily Stats
              <hr/>
            </Col>
          </Row>
          <Row>
          
          
            <Col className="s1 black-text center-align">
              <div className="btn green waves-effect prev leftArrow" onClick={this.dateDecrement}>{'<'}</div>
            </Col>
            <Col className="s4 offset-s1 black-text center-align">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleDateChange}
              />
            </Col>
            <Col className="s4 black-text center-align">
              Calories
              <br/>
              {this.state.caloriesCounter} / {this.state.maxCalories}
            </Col>
            <Col className="s1 offset-s1 black-text center-align">
              <div className="btn green waves-effect next rightArrow" onClick={this.dateIncrement}>{'>'}</div>  
            </Col>
          </Row>
          
          <Row>
          <hr/>
          
          <Col className="l4 offset-l1 m8 offset-m2 s10 offset-s1 black-text center-align graphContainer">
            <div className="sectionBGL">
              <img src={waterImg} alt="Water" />
            </div>
            <div className="chartTitle">
                Water Intake
              </div>
            <div className="sectionData">
            <Bar
              data={{
                datasets: [
                  {
                    label: ["Water"],
                    data: [this.state.waterCounter],
                    type: 'bar',
                    fill: false,
                    borderColor: '#bebebe',
                    backgroundColor: 'rgba(0, 119, 190, 1)',
                    hoverBorderColor: '#bebebe',
                    hoverBackgroundColor: 'rgba(77, 190, 255, 1)',
                    yAxisID: 'y-axis-1',
                    stack: 2
                  },
                  {
                    label: ["Water Target"],
                    data: [this.state.targetWater],
                    type: 'bar',
                    fill: false,
                    borderColor: '#bebebe',
                    backgroundColor: 'rgba(0, 119, 190, 0.3)',
                    hoverBorderColor: '#bebebe',
                    hoverBackgroundColor: 'rgba(77, 190, 255, 0.3)',
                    yAxisID: 'y-axis-1',
                    stack: 2,
                    datalabels: {
                      // hide datalabels for this specific dataset
                      display: false
                    }
                  }
                ]
              }}
              width={100}
              height={100}
              options={{
                maintainAspectRatio: true,
                legend: {
                  display: false
                },
                  responsive: true,
                tooltips: {
                  mode: 'label',
                  backgroundColor: "black",
                  bodyFontColor: "white"
                },
                scales: {
                  xAxes: [{
                    position: 'bottom',
                    display: true,
                    stacked: true,
                    gridLines: {
                      display: true
                    },
                    labels: ["Cups (1 cup = 8 oz.)"]
                  }],
                  yAxes: [
                    {
                      type: 'linear',
                      display: true,
                      stacked: false,
                      position: 'left',
                      id: 'y-axis-1',
                      gridLines: {
                          display: false
                      },
                      labels: {
                          show: true
                      },
                      ticks: {
                        beginAtZero:true,
                        suggestedMin: 0,
                        suggestedMax: 20,
                        precision: 0,
                        fontColor: 'black'
                      }
                    }
                  ]
                },
                plugins: {
                  datalabels: {
                    display: true,
                    color: 'black'
                  }
                }
              }}
            />
            <br/>
            <div className="btn red waves-effect" onClick={this.subOneWater}>-</div>
            <div className="btn green waves-effect" onClick={this.addOneWater}>+</div>
            </div>
          </Col>
          <Col className="l4 offset-l1 m8 offset-m2 s10 offset-s1 black-text center-align graphContainer">
            <div className="sectionBGPie">
              <img src={nutritionImg} alt="Nutrition" />
            </div>
            <div className="chartTitle">
                Nutrition Facts
              </div>
            <div className="sectionDataPie">
              
              <Pie
                data={{
                  labels: ["Protein", "Carbs", "Fat"],
                  datasets: [{
                    data: [this.state.proteinCounter, this.state.carbsCounter, this.state.fatCounter],
                    borderColor: '#bebebe',
                    backgroundColor : ["#F69421", "#A9A9AA", "#FF6E70"]
                  }]
                }}
                width={100}
                height={100}
                options={{
                  maintainAspectRatio: true,
                  legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        boxWidth: 10,
                        padding:  10,
                        fontColor: "black",
                        fontSize: 14
                    }
                  },
                  tooltips: {
                    backgroundColor: "black",
                    bodyFontColor: "white"
                  },
                  scales: {
                    xAxes: [{
                      display: false,
                      gridLines: {
                        display: false
                      }
                    }],
                    yAxes: [{
                        display: false,
                          gridLines: {
                            display: false
                        }
                      }]
                  },
                  plugins: {
                    datalabels: {
                      display: true,
                      color: 'black'
                  }
                  }
                }}
              />
              <br/>
              <div className="nutritionMenu">
                <Modal trigger={<div className="btn green waves-effect">Add Meal</div>}>
                  <div>
                    {this.getMeals()}
                  </div>
                  <br/>
                  <br/>
                  <form onSubmit = {this.exerciseFindAndUpdate}>
                    <TextInput label="Meal" name = "meal" onChange = {this.handleChange}/>
                    <TextInput label="Calories (optional)" name = "caloriesInput" onChange = {this.handleChange}/>
                    <TextInput label="Protein (optional" name = "proteinInput" onChange = {this.handleChange}/>
                    <TextInput label="Fat (optional)" name = "fatInput" onChange = {this.handleChange}/>
                    <TextInput label="Carbs (optional)" name = "carbsInput" onChange = {this.handleChange}/>
                    <Button type="submit" waves="light">Submit<Icon right>send</Icon></Button>
                  </form> 
                </Modal>
              </div>
            </div>
          </Col>
          </Row>
          <Row>
          <Col className="l4 offset-l1 m8 offset-m2 s10 offset-s1 black-text center-align graphContainer">
            
            <div className="sectionBG">
              <img src={workoutImg} alt="Workout" />
            </div>
            <div className="chartTitle">
                Workout
            </div>
            <div className="sectionData">
              <Bar
                data={{
                  datasets: [
                    {
                      label: ["Workout"],
                      data: [this.state.workoutCounter],
                      type: 'bar',
                      fill: false,
                      borderColor: '#bebebe',
                      backgroundColor: 'rgba(0, 200, 100, 1)',
                      hoverBorderColor: '#bebebe',
                      hoverBackgroundColor: 'rgba(0, 255, 128, 1)',
                      yAxisID: 'y-axis-1',
                      stack: 2
                    },
                    {
                      label: ["Workout Target"],
                      data: [this.state.targetWorkout],
                      type: 'bar',
                      fill: false,
                      borderColor: '#bebebe',
                      backgroundColor: 'rgba(0, 200, 100, 0.3)',
                      hoverBorderColor: '#bebebe',
                      hoverBackgroundColor: 'rgba(0, 255, 128, 0.3)',
                      yAxisID: 'y-axis-1',
                      stack: 2,
                      datalabels: {
                        // hide datalabels for this specific dataset
                        display: false
                      }
                    }
                  ]
                }}
                width={100}
                height={100}
                options={{
                  maintainAspectRatio: true,
                  legend: {
                    display: false
                  },
                    responsive: true,
                  tooltips: {
                    mode: 'label',
                    backgroundColor: "black",
                    bodyFontColor: "white"
                  },
                  scales: {
                    xAxes: [{
                      position: 'bottom',
                      display: true,
                      stacked: true,
                      gridLines: {
                        display: true
                      },
                      labels: ["Hours"]
                    }],
                    yAxes: [
                      {
                        type: 'linear',
                        display: true,
                        stacked: false,
                        position: 'left',
                        id: 'y-axis-1',
                        gridLines: {
                            display: false
                        },
                        labels: {
                            show: true
                        },
                        ticks: {
                          beginAtZero:true,
                          suggestedMin: 0,
                          suggestedMax: 5,
                          precision: 0,
                          fontColor: 'black'
                        }
                      }
                    ]
                  },
                  plugins: {
                    datalabels: {
                      display: true,
                      color: 'black'
                    }
                  }
                }}
              />
            <br/>
              <div className="btn red waves-effect" onClick={this.subOneHourW}>-</div>
              <div className="btn green waves-effect" onClick={this.addOneHourW}>+</div>
            </div>
          </Col>
          <Col className="l4 offset-l1 m8 offset-m2 s10 offset-s1 black-text center-align graphContainer">
            <div className="sectionBG">
              <img src={sleepImg} alt="Sleep" />
            </div>
            <div className="chartTitle">
              Sleep Last Night
            </div>
            <div className="sectionData">
              <Bar
                data={{
                  datasets: [
                    {
                      label: ["Sleep"],
                      data: [this.state.sleepCounter],
                      type: 'bar',
                      fill: false,
                      borderColor: '#bebebe',
                      backgroundColor: 'rgba(95, 107, 127, 1)',
                      hoverBorderColor: '#bebebe',
                      hoverBackgroundColor: 'rgba(138, 151, 158, 1)',
                      yAxisID: 'y-axis-1',
                      stack: 2
                    },
                    {
                      label: ["Sleep Target"],
                      data: [this.state.targetSleep],
                      type: 'bar',
                      fill: false,
                      borderColor: '#bebebe',
                      backgroundColor: 'rgba(95, 107, 127, 0.3)',
                      hoverBorderColor: '#bebebe',
                      hoverBackgroundColor: 'rgba(138, 151, 158, 0.3)',
                      yAxisID: 'y-axis-1',
                      stack: 2,
                      datalabels: {
                        // hide datalabels for this specific dataset
                        display: false
                      }
                    }
                  ]
                }}
                width={100}
                height={100}
                options={{
                  maintainAspectRatio: true,
                  legend: {
                    display: false
                  },
                    responsive: true,
                  tooltips: {
                    mode: 'label',
                    backgroundColor: "black",
                    bodyFontColor: "white"
                  },
                  scales: {
                    xAxes: [{
                      position: 'bottom',
                      display: true,
                      stacked: true,
                      gridLines: {
                        display: true
                      },
                      labels: ["Hours"]
                    }],
                    yAxes: [
                      {
                        type: 'linear',
                        display: true,
                        stacked: false,
                        position: 'left',
                        id: 'y-axis-1',
                        gridLines: {
                            display: false
                        },
                        labels: {
                            show: true
                        },
                        ticks: {
                          beginAtZero:true,
                          suggestedMin: 0,
                          suggestedMax: 9,
                          precision: 0,
                          fontColor: 'black'
                        }
                      }
                    ]
                  },
                  plugins: {
                    datalabels: {
                      display: true,
                      color: 'black'
                    }
                  }
                }}
              />
              <br/>
              <div className="btn red waves-effect" onClick={this.subOneHourS}>-</div>
              <div className="btn green waves-effect" onClick={this.addOneHourS}>+</div>
            </div>
          </Col>
          </Row>
        </Container>
      </div>
  
    );
  }
}

export default withAuth(Day);

