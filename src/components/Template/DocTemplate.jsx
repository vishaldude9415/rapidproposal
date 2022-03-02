import React, { Component } from 'react';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import aa from './template.doc'
import { Button } from '@mui/material'

function loadFile(url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

export const DocTemplate = class DocTemplate extends React.Component {
  render() {
    {console.log(this.props.name)}
    {console.log(this.props.month)}
    const PName = this.props.name;
    const PMonth = this.props.month
    const generateDocument = () => {
      // loadFile('https://docxtemplater.com/tag-example.docx', function(
      // loadFile('https://drive.google.com/uc?export=download&id=1L3ToQIg0gfLfWkr0fUDZwj9Iwpeq3YU8', function(
      loadFile(aa, function(
      // loadFile("https://booktographer.herokuapp.com/uploads/1646060819814templating2.docx", function(
        error,
        content
      ) {
        if (error) {
          throw error;
        }
        var zip = new PizZip(content);
        var doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true
        });
        doc.setData({
          projectName: PName,
          projectMonth: PMonth
        });
        try {
          // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
          doc.render();
        } catch (error) {
          // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
          function replaceErrors(key, value) {
            if (value instanceof Error) {
              return Object.getOwnPropertyNames(value).reduce(function(
                error,
                key
              ) {
                error[key] = value[key];
                return error;
              },
              {});
            }
            return value;
          }
          console.log(JSON.stringify({ error: error }, replaceErrors));

          if (error.properties && error.properties.errors instanceof Array) {
            const errorMessages = error.properties.errors
              .map(function(error) {
                return error.properties.explanation;
              })
              .join('\n');
            console.log('errorMessages', errorMessages);
            // errorMessages is a humanly readable message looking like this :
            // 'The tag beginning with "foobar" is unopened'
          }
          throw error;
        }
        var out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        }); //Output the document using Data-URI
        saveAs(out, 'proposal.docx');
      });
    };

    return (
      <div className="p-2" className="App">
          <Button onClick={generateDocument} style={{ borderRadius: '0', backgroundColor: 'blue' }} variant="contained">Generate Proposal</Button>
      </div>
    );
  }
};


export default DocTemplate