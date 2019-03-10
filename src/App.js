import React, { Component } from 'react';
import * as Survey from 'survey-react';
import 'survey-react/survey.css';
// import SurveyEditor from "./SurveyEditor";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'jquery-ui/themes/base/all.css';
import 'nouislider/distribute/nouislider.css';
import 'select2/dist/css/select2.css';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

import 'jquery-bar-rating/dist/themes/css-stars.css';

import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker.js';
import 'select2/dist/js/select2.js';
import 'jquery-bar-rating';

import * as widgets from 'surveyjs-widgets';

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {
  json = {
    title: 'Product Feedback Survey Example',
    showProgressBar: 'top',
    pages: [
      {
        elements: [
          {
            type: 'datepicker',
            name: 'companybirth',
            inputType: 'date',
            title: 'When was your company founded?',
            dateFormat: 'mm/dd/yy',

            isRequired: true
          },
          {
            name: 'funding',
            type: 'text',
            title: 'How much funding have you raised?',
            // placeHolder: 'Jon Snow',
            isRequired: true
          },

          // {
          //   type: 'dropdown',
          //   renderAs: 'select2',
          //   choicesByUrl: {
          //     url: 'https://restcountries.eu/rest/v1/all'
          //   },
          //   name: 'countries',
          //   title: 'Please select the country you have arrived from:'
          // },
          {
            name: 'messaging',
            type: 'comment',
            title: 'What messaging do you currently have in place?',
            // placeHolder: 'Jon Snow',
            isRequired: true
          },
          {
            type: 'checkbox',
            name: 'communication',
            title: 'What are your communications needs?',
            isRequired: true,
            colCount: 1,
            choices: [
              'Media Relations',
              'Content Development',
              'Messaging',
              'Social/Digital Marketing',
              'Crisis'
            ]
          },
          {
            type: 'checkbox',
            name: 'publication types',
            title: 'What publication types are important to your company?',
            isRequired: true,
            colCount: 1,
            choices: ['Mainstream', 'Trade', 'Local', 'National']
          }
        ]
      },
      {
        questions: [
          {
            type: 'file',
            title: 'What is your company’s logo?',
            name: 'image',
            storeDataAsText: false,
            showPreview: true,
            imageWidth: 150,
            maxSize: 102400
          },
          {
            name: 'messaging',
            type: 'comment',
            title: 'What type of news coverage have you received in the past?',

            isRequired: true
          },
          {
            name: 'messaging',
            type: 'comment',
            title: 'What keeps you up at night?',

            isRequired: true
          },
          {
            type: 'rating',
            name: 'recommend friends',
            visibleIf: '{satisfaction} > 3',
            title:
              'How likely are you to recommend the Product to a friend or co-worker?',
            mininumRateDescription: 'Will not recommend',
            maximumRateDescription: 'I will recommend'
          },
          {
            type: 'comment',
            name: 'suggestions',
            title:
              'What makes your product or your company different from your competitors?'
          }
        ]
      },
      {
        questions: [
          {
            type: 'radiogroup',
            name: 'price to competitors',
            title: 'Compared to our competitors, do you feel the Product is',
            choices: [
              'Less expensive',
              'Priced about the same',
              'More expensive',
              'Not sure'
            ]
          },
          {
            type: 'radiogroup',
            name: 'price',
            title: 'Do you feel our current price is merited by our product?',
            choices: [
              'correct|Yes, the price is about right',
              'low|No, the price is too low for your product',
              'high|No, the price is too high for your product'
            ]
          },
          {
            type: 'multipletext',
            name: 'pricelimit',
            title: 'What is the... ',
            items: [
              {
                name: 'mostamount',
                title: 'Most amount you would every pay for a product like ours'
              },
              {
                name: 'leastamount',
                title: 'The least amount you would feel comfortable paying'
              }
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: 'text',
            name: 'email',
            title:
              'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
          }
        ]
      }
    ]
  };

  componentWillMount() {
    import('icheck');
    window['$'] = window['jQuery'] = $;
  }

  onValueChanged(result) {
    console.log('value changed!');
  }

  onComplete(result) {
    console.log('Complete! ' + result);
  }

  render() {
    Survey.Survey.cssType = 'bootstrap';
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with SurveyJS</h2>
        </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          <h1>SurveyJS library in action:</h1>
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
          {/*If you want to show survey editor, uncomment the line below*/}
          {/* <h1>SurveyJS Editor in action:</h1>
          <SurveyEditor /> */}
        </div>
      </div>
    );
  }
}

export default App;
