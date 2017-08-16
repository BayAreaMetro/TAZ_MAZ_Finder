// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:jimu/dijit/templates/ReportTemplate.html":'\x3c!DOCTYPE HTML\x3e\r\n\x3chtml lang\x3d"en" dir\x3d"ltr"\x3e\r\n\r\n\x3chead id\x3d"reportHead"\x3e\r\n  \x3cmeta charset\x3d"utf-8"\x3e\r\n  \x3cmeta http-equiv\x3d"X-UA-Compatible" content\x3d"IE\x3dEdge,chrome\x3d1"\x3e\r\n  \x3ctitle\x3e\x3c/title\x3e\r\n  \x3cscript\x3e\r\n    // Show/hide text area controls based on the value\r\n    function onPrintButtonClicked() {\r\n      var notesContainer, i;\r\n      notesContainer \x3d document.getElementsByClassName("esriCTNotesContainer");\r\n      //process notes to show/hide based on contents\r\n      for (i \x3d 0; i \x3c notesContainer.length; i++) {\r\n        if (notesContainer[i]) {\r\n          //Hide the notes which are not having values\r\n          if (notesContainer[i].children[1].value.trim() \x3d\x3d\x3d "") {\r\n            notesContainer[i].className +\x3d " esriCTHideReportNotes";\r\n          }\r\n          else {\r\n            //Removes hidden class if available\r\n            notesContainer[i].className \x3d\r\n              notesContainer[i].className.replace("esriCTHideReportNotes", "");\r\n          }\r\n        }\r\n      }\r\n      //after processing notes, print the window\r\n      window.print();\r\n    }\r\n  \x3c/script\x3e\r\n  \x3c!-- Report prev page css --\x3e\r\n  \x3cstyle type\x3d"text/css"\x3e\r\n    .esriCTReportMapWait {\r\n      background: #fff url(\'data:image/gif;base64,R0lGODlhGAAYAPfRAPT09ODg4PLy8ufn5wC/7+Hh4evr6+7u7ujo6OLi4vPz8+3t7fHx8eXl5ebm5tbs8lLN7AvB7gK/7wTA7wbA7wO/7wG/7+vx8+Pj4xjD7lHN7Kfg7g/B7n3W7V7Q7PP09Kjg7uzy9HzW7YXY7V/Q7PHz9BnD7kDK7KXf7hLC7j/J7BXC7tXs8pzd7jTH7PL09Njt8iHE7dru83XT6ynF7Ory9Obo6Ovy9Nfu8xfC7Zze7nHU7Zfd7tTr8aDh8iPE7Zzg8SLF7mLQ7FfP7tXr8dfs8WvR6tzv9DrI7KLh8cPp8wjA73jV7bTl8dvv84/a7bTm86/k8ePv8sfm7k3M7Ony9EfK63DV787q8rPl8VDN7BrD7WHR7WDS7xvD7Z/h8hnD7U3O7o/d8bbl8YXT5qfi8V3P7FvM6aTi8d/t8VzP64zc8eTv8pjb7ArA7ijG7SbG7g3B7jnH6yTE7ZTV5WXQ7MPo8XTS6pPZ6wjA7lnQ7Znf8R/E7pbZ6nrX7kHJ697u8jTI7bvb4sLc4k7L62LP6xHC7p3e7qnd6n7V6wXA77zn8eLw9OTw9E/L6gnA7rrm8YvY6xjC7XDV7iDE7Zvf8Mvp8VHL6mrR61zP7Mrj6aPc6sbi6T/K7YzU5m/U7mrT7aHd7FnO7JPc7u/z9IfT5sDl7onX6tDs86Ph8SXF7rDg7C/G7EzM7GbR6xDB7h3D7azj8e7z9Kvj8UfL7HPT66Xg7ofc8tzu80XL7YDV693v9J3W5DvI61XM6hTC7izH7eXv8jnI7HfW7png8iXE7Z/g8EDK7QfA75Te8UfL7aTf7tfs8sXl7Zjf8c7s89Xt8////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkQ3RDc3ODNCNjdFMTFFNThFMERBOTlFOTM1QUJEQzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkQ3RDc3ODRCNjdFMTFFNThFMERBOTlFOTM1QUJEQzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRDdENzc4MUI2N0UxMUU1OEUwREE5OUU5MzVBQkRDNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRDdENzc4MkI2N0UxMUU1OEUwREE5OUU5MzVBQkRDNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAUKANEALAAAAAAYABgAAAjeAAEIHAjggQgVJigUwODAAAOCEAc+0FCBgEUCATJmHCAg4kBbESxCAPHgggIGBwZkLLDA4wgJBCA88AhAgMoABiC2sEDAA02CCDK2FPggJImfEIMW6AgAQkykEVUOAMAC5kyoBAVkFNDhKVaIKg2cILDhK8QDARxkIADDbNYACSgQuOB2oIKVARTUFXgXbgCmdbUmaBDgwF4AaBsGmLo3LIOtgTM+lFqXcs0CARCYVQp4QUbNUIMGGDrQwEbAEG1mzBnxAObFB5gKSLmSdETVGnOfxirAQIMEGQc79BgQACH5BAUKANEALAAAAAAUAAwAAAiFAKMJFBgCVZkdhYQZ+mHlzQ5jOAZKjFWHlYQJYCil4JCDAIFMayRG40Ej2q9cy+z4IGZJhygXFuKEGWiAQAQhWUpEK/FCYJVoUU5NICBwQYBSiUQqfYHoTDQBBQIgkPFBqVJN0QYEGGC169MAAQR4tWpg61irDgIcOKs0QVi2IqMqgCsxIAAh+QQFCgDRACwEAAAAFAAMAAAIbgABCBRgoEGCAhQynOjQQ6BDhwIGBJg4kYBFAhIgPHgI4ECBiQMOCFBwocgGCBYjtHgIUgBHhw9QWhjhMACCly9JYEQh8CbOlx4IRNj48ydKDUV/PiBQgWhSjihFPH0JgkCnqRyXmsD68AIBCgEBACH5BAUKANEALAwAAAAMABUAAAh9AAtgcGCAQbSDCKMFWLhwgICE0RQwODBgYYEFEBEKqDiISUaECDwRmPTxIKcJBNCUjKbLQqAXJYPBItBkZa1oQ1ZOycNnJbMVE1biyqFopQxJyFY+SLFkpSk3QUqWmEFAT0lAMThA+rgLEwEqJSNV4JCkpCACnxqtbHPjYEAAIfkEBQoA0QAsDAADAAwAFQAACHUAAQgEIGBAgAAGBioUiODggoUKGxYQAHGgwQEVBQo4SDGjwYQZDwRwkJFggAQlFRwseYEAhZIwCGQouYHAiZIQCHTI+ICAhB4Zc0LISIJAhAcVPRCw0ALig5wSRgwM8QBETqMoFBLYSqCCBqQKKZhQIYJIxYAAIfkEBQoA0QAsBAAMABQADAAACIYAowkcSLCgQAUBAhhcSFBAgAQMIx4I4CAiwwEBDFg06DAAg40FMQ6IZiPaB5AIAhQQEI2MEFk1IobA8yfAAoEECLRK5STmhxsCoQExE62CRoE85lTYokqHmFtQZl05FmNFhmEFx8z4IWFChBQrJryKwCHaniMGcUgBZYSQFzmXaHGpxMhgQAAh+QQFCgDRACwAAAwAFAAMAAAIbgApELgAoKDBgwgLmiDwIKHDgyoIgHhIUQQBCBQfEqnAMKNDDRc9JnwQgYAHkQURFEQhgQAJkQgCGBxh4WJDhwIGBJBp8FDJixtghAAg4IDOAAUWIHwAoSWBpzujDhDwkEWHExkoBEjQwAADgwEBACH5BAUKANEALAAAAwAMABUAAAiAAKMJHMJLoMGDfggUs3HQ4KJHEzZ9aChQCwFXFAWymDABS8ZoTwgo+xhNDYFRJJEQAELSBQEfJHtF+0LSUbRkJO9E60LqY6hoQZ59TOPCgjOSfaIBU/KRja9ocEg2o0EHwccSqwIEGCDg44ECWgccEACgoYABWtNmFGCgQYIAAQEAOw\x3d\x3d\') no-repeat center center;\r\n      height: 200px;\r\n    }\r\n\r\n    .esriCTHTMLData {\r\n      position: relative;\r\n      width: 100%;\r\n      height: auto;\r\n    }\r\n\r\n    .jimu-rtl .esriCTHTMLData {\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTTable {\r\n      margin-top: 10px;\r\n      padding: 0;\r\n      border-collapse: collapse;\r\n      border-spacing: 0;\r\n      width: 100%;\r\n      page-break-inside: avoid;\r\n      table-layout: fixed;\r\n    }\r\n\r\n    .jimu-rtl .esriCTTable {\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTTable th {\r\n      border: 1px solid gray;\r\n      background-color: #E4E4E4;\r\n      word-wrap: break-word;\r\n    }\r\n\r\n    .esriCTTable td {\r\n      border: 1px solid gray;\r\n      word-wrap: break-word;\r\n    }\r\n\r\n    .esriCTNumber {\r\n      text-align: right;\r\n    }\r\n\r\n    .esriCTSectionTitle {\r\n      font-size: 18px;\r\n      color: #0f96cc;\r\n      font-weight: bold;\r\n      margin: 30px 0px;\r\n      width: calc(100% - 10px);\r\n      word-break: break-all;\r\n    }\r\n\r\n    .jimu-rtl .esriCTSectionTitle {\r\n      float: right;\r\n      direction: rtl;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportMap .esriCTSectionTitle {\r\n      float: none;\r\n    }\r\n\r\n    .esriCTReportLogo {\r\n      float: left;\r\n      max-width: calc(50% - 10px);\r\n      margin: auto 10px auto 0;\r\n      max-height: 90%;\r\n      position: absolute;\r\n      top: 0;\r\n      bottom: 0;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportLogo {\r\n      float: right;\r\n      margin: auto 0 auto 10px;\r\n    }\r\n\r\n    .esriCTPrintTitleDiv {\r\n      height: 56px;\r\n      float: right;\r\n      min-width: 50%;\r\n    }\r\n\r\n    .jimu-rtl .esriCTPrintTitleDiv {\r\n      float: left;\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTInputTitle {\r\n      height: 55px;\r\n      line-height: 55px;\r\n      border: none;\r\n      font-size: 25px;\r\n      width: 100%;\r\n      padding: 0px;\r\n    }\r\n\r\n    .esriCTInputTitle::-ms-clear {\r\n      display: none;\r\n    }\r\n\r\n    .esriCTReportMain {\r\n      background: #FFF;\r\n      border: solid 1px #000;\r\n      margin: 0 auto;\r\n      padding: 20px;\r\n      width: 797px;\r\n    }\r\n\r\n    .esriCTReportMap {\r\n      text-align: center;\r\n    }\r\n\r\n    .esriCTReportMapImg {\r\n      max-width: 96%;\r\n      margin-top: 10px;\r\n    }\r\n\r\n    .esriCTReportLandscapeMapImg {\r\n      max-width: 80%;\r\n    }\r\n\r\n    .esriCTReportMapFail {\r\n      height: 50px;\r\n    }\r\n\r\n    .esriCTReportFooter {\r\n      text-align: center;\r\n      font-size: 80%;\r\n      padding: 10px 0;\r\n      white-space: pre-wrap;\r\n    }\r\n\r\n    .esriCTPrintPage {\r\n      padding: 30px 0;\r\n      margin: 20px auto;\r\n      font-family: arial, sans-serif;\r\n      font-size: 13px;\r\n    }\r\n\r\n    .esriCTReportBar {\r\n      width: 100%;\r\n      position: fixed;\r\n      left: 0;\r\n      top: 0;\r\n      z-index: 6;\r\n      height: 50px;\r\n      background: #e2f1fc;\r\n      border-bottom: 1px solid #000;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportBar {\r\n      left: inherit;\r\n      right: 0;\r\n    }\r\n\r\n    .esriCTPrintButton,\r\n    .esriCTCloseButton {\r\n      color: #444;\r\n      font-family: Verdana, Helvetica, sans-serif;\r\n      font-size: 12px;\r\n      -moz-border-radius: 3px;\r\n      -webkit-border-radius: 3px;\r\n      border-radius: 3px;\r\n      border: 1px solid #8b8b8b;\r\n      box-shadow: none;\r\n      -webkit-box-shadow: none;\r\n      background: #F2F2F2;\r\n      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\r\n      background: -moz-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #F2F2F2), color-stop(100%, #D1D1D1));\r\n      background: -webkit-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: -o-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: -ms-linear-gradient(top, #F2F2F2 0%, #D1D1D1 100%);\r\n      background: linear-gradient(to bottom, #F2F2F2 0%, #D1D1D1 100%);\r\n      filter: progid: DXImageTransform.Microsoft.gradient(startColorstr\x3d\'#F2F2F2\', endColorstr\x3d\'#D1D1D1\', GradientType\x3d0);\r\n      margin: 10px 20px;\r\n      line-height: 16px;\r\n      display: block;\r\n      padding: 5px 10px;\r\n      outline: 0;\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n      font-weight: 400;\r\n      white-space: nowrap;\r\n      float: right;\r\n    }\r\n\r\n    .jimu-rtl .esriCTPrintButton,\r\n    .jimu-rtl .esriCTCloseButton {\r\n      float: left;\r\n    }\r\n\r\n    .esriCTPrintButton:hover,\r\n    .esriCTPrintButton:focus,\r\n    .esriCTCloseButton:hover,\r\n    .esriCTCloseButton:focus {\r\n      background: #E5E6E6;\r\n      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU1ZTUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\r\n      background: -moz-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #E5E6E6), color-stop(100%, #A0A1A1));\r\n      background: -webkit-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: -o-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: -ms-linear-gradient(top, #E5E6E6 0%, #A0A1A1 100%);\r\n      background: linear-gradient(to bottom, #E5E6E6 0%, #A0A1A1 100%);\r\n      filter: progid: DXImageTransform.Microsoft.gradient(startColorstr\x3d\'#E5E6E6\', endColorstr\x3d\'#A0A1A1\', GradientType\x3d0);\r\n    }\r\n\r\n    .esriCTReportHeader {\r\n      display: block;\r\n      width: 100%;\r\n      height: 60px;\r\n      border-bottom: 1px solid #000;\r\n      margin-bottom: 5px;\r\n      position: relative;\r\n    }\r\n\r\n    .esriCTReportBarMsg {\r\n      text-align: center;\r\n      margin-top: 16px;\r\n    }\r\n\r\n    .esriCTNotesContainer {\r\n      width: 100%;\r\n      margin-top: 30px;\r\n    }\r\n\r\n    .esriCTReportNotes {\r\n      resize: none;\r\n      width: calc(100% - 5px);\r\n      max-width: calc(100% - 5px);\r\n      font-family: "Arial";\r\n      font-size: 13px;\r\n      border: 1px solid gray;\r\n      overflow-y: hidden; /* prevents scroll bar flash */\r\n    }\r\n\r\n    .esriCTReportNotesParagraph {\r\n      display: none;\r\n      white-space: pre-wrap;\r\n    }\r\n\r\n    .jimu-rtl .esriCTReportNotes {\r\n      direction: rtl;\r\n    }\r\n\r\n    .esriCTHidden {\r\n      display: none;\r\n    }\r\n  \x3c/style\x3e\r\n  \x3c!-- Media print css --\x3e\r\n  \x3cstyle type\x3d"text/css" media\x3d"print"\x3e\r\n    .esriCTPrintPage {\r\n      padding: 0;\r\n      color: #000;\r\n      margin: 0;\r\n      float: none;\r\n      background: #fff url(none);\r\n    }\r\n\r\n    .esriCTTable {\r\n      page-break-inside: avoid;\r\n    }\r\n\r\n    .esriCTPageBreak {\r\n      page-break-after: always;\r\n    }\r\n\r\n    .esriCTReportFooter {\r\n      font-size: 75%;\r\n    }\r\n\r\n    .esriCTReportBar {\r\n      display: none;\r\n    }\r\n\r\n    .esriCTReportMain {\r\n      border: none;\r\n    }\r\n\r\n    .esriCTReportMapImg {\r\n      box-shadow: none;\r\n      border: none;\r\n    }\r\n\r\n    .esriCTReportNotes {\r\n      display: none;\r\n    }\r\n\r\n    .esriCTReportNotesParagraph {\r\n      display: block;\r\n    }\r\n\r\n    .esriCTHideReportNotes {\r\n      display: none;\r\n    }\r\n  \x3c/style\x3e\r\n  \x3cscript\x3e\r\n    function showError(evt) {\r\n      alert(document.getElementById(\'showErrorButton\').innerHTML);\r\n    }\r\n  \x3c/script\x3e\r\n\x3c/head\x3e\r\n\r\n\x3cbody id\x3d"reportBody" class\x3d"esriCTPrintPage"\x3e\r\n  \x3cbutton id\x3d"showErrorButton" style\x3d"display: none" onclick\x3d"showError()"\x3e\x3c/button\x3e\r\n  \x3cdiv class\x3d"esriCTReportBar"\x3e\r\n    \x3cdiv id\x3d"closeButton" class\x3d"esriCTCloseButton" title\x3d"Close" onclick\x3d"window.close();"\x3eClose\x3c/div\x3e\r\n    \x3cdiv id\x3d"printButton" class\x3d"esriCTPrintButton" title\x3d"Print" onclick\x3d"onPrintButtonClicked();"\x3ePrint\x3c/div\x3e\r\n    \x3cdiv id\x3d"reportBarMsg" class\x3d"esriCTReportBarMsg"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv id\x3d"reportMain" class\x3d"esriCTReportMain"\x3e\r\n    \x3cdiv id\x3d"reportHeader" class\x3d"esriCTReportHeader"\x3e\r\n      \x3cimg id\x3d"reportLogo" class\x3d"esriCTReportLogo esriCTHidden" src\x3d""\x3e\r\n      \x3cdiv id\x3d"printTitleDiv" class\x3d"esriCTPrintTitleDiv"\x3e\r\n        \x3cinput id\x3d"reportTitle" type\x3d"text" class\x3d"esriCTInputTitle"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv id\x3d"reportData"\x3e\x3c/div\x3e\r\n    \x3cdiv id\x3d"footNotes" class\x3d"esriCTReportFooter"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/body\x3e\r\n\r\n\x3c/html\x3e'}});
define("dojo/_base/declare jimu/BaseWidget jimu/utils dojo/Evented ./PageUtils dojo/text!./templates/ReportTemplate.html dojo/_base/lang dojo/_base/array dojo/_base/window dojo/dom-construct dojo/dom-class dojo/dom-style dojo/dom dojo/string dojo/on esri/tasks/PrintParameters esri/tasks/PrintTemplate esri/tasks/PrintTask".split(" "),function(t,u,l,v,h,w,g,m,x,f,k,p,e,y,r,z,A,B){return t([u,v],{baseClass:"jimu-report",_printService:null,_printWindow:null,_sizeInPixels:{},_shownUnableToPrintMapMsg:!1,
printTaskUrl:null,reportLogo:"",reportLayout:{},maxNoOfCols:3,alignNumbersToRight:!1,styleSheets:[],styleText:"",constructor:function(){this.inherited(arguments);this._sizeInPixels={};this.printTaskUrl=null;this.reportLayout={};this.styleSheets=[]},postMixInProperties:function(){this.nls=g.mixin(window.jimuNls.common,window.jimuNls.report)},postCreate:function(){var a;a={pageSize:h.PageSizes.A4,orientation:h.Orientation.Portrait};this.inherited(arguments);this.setReportLayout(this.reportLayout,a);
this.reportLayout.dpi=96;this.printTaskUrl&&this._createPrintTask()},setReportLayout:function(a,b){b||(b=this.reportLayout);this._validateParameters(a)?this.reportLayout=g.mixin(b,a):this.reportLayout=b},setMapLayout:function(a){var b;b=this.reportLayout.pageSize.MapLayout?this.reportLayout.pageSize.MapLayout:"MAP_ONLY";"MAP_ONLY"===b?(a.exportOptions={dpi:this.reportLayout.dpi},this.reportLayout.orientation.Type===h.Orientation.Landscape.Type&&this.reportLayout.pageSize!==h.PageSizes.Custom?(a.exportOptions.width=
this._sizeInPixels.Height,a.exportOptions.height=this._sizeInPixels.Width):(a.exportOptions.width=this._sizeInPixels.Width,a.exportOptions.height=this._sizeInPixels.Height)):b+=" "+this.reportLayout.orientation.Type;a.layout=b;return a},_validateParameters:function(){return this.reportLayout.pageSize!==h.PageSizes.Custom||this.reportLayout.size?!0:!1},_createPrintTask:function(){this._printService=new B(this.printTaskUrl,{async:!1})},_createPrintMapParameters:function(a){var b,c;c=new A;a.printTemplate?
(c=a.printTemplate,c.format?(b=c.format.toLowerCase(),"png32"!==b&&"png8"!==b&&"jpg"!==b&&"gif"!==b&&(c.format="jpg")):c.format="jpg"):(c=this.setMapLayout(c),c.layoutOptions={},c.preserveScale=!1,c.showAttribution=!0,c.format="jpg");b=new z;b.map=a.map;b.outSpatialReference=a.map.spatialReference;b.template=c;return b},print:function(a,b){var c,d;this._printService?(this._shownUnableToPrintMapMsg=!1,this._printWindow&&this._printWindow.close(),c=screen.width/2,d=screen.height/1.5,c="toolbar\x3dno, location\x3dno, directories\x3dno, status\x3dyes, menubar\x3dno,scrollbars\x3dyes, resizable\x3dyes, width\x3d"+
c+", height\x3d"+d+", top\x3d"+(screen.height/2-d/2)+", left\x3d"+(screen.width/2-c/2),this._printWindow=window.open("","report",c,!0),setTimeout(g.hitch(this,function(){x.withDoc(this._printWindow.document,g.hitch(this,function(){this._printWindow.document.open("text/html","replace");this._printWindow.document.write(w);window.isRTL&&k.add(e.byId("reportBody"),"jimu-rtl");(this.styleSheets&&0<this.styleSheets.length||this.styleText&&""!==this.styleText)&&this._addExternalStyleSheets();this._setPageSize();
this._setButtonLabels();this._setReportSizeMessage();this._setReportLogo();this._setReportTitle(a);this._setReportData(b);this._setFootNotes();this._printWindow.document.close()}))}),500)):this.emit("reportError")},_addExternalStyleSheets:function(){var a=e.byId("reportHead");a&&(m.forEach(this.styleSheets,g.hitch(this,function(b){f.create("link",{rel:"stylesheet",type:"text/css",href:b},a)})),this.styleText&&f.create("style",{type:"text/css",innerHTML:this.styleText},a))},_setPageSize:function(){var a,
b,c;c=e.byId("reportMain");this.reportLayout&&(a=this.reportLayout.pageSize,this.reportLayout.pageSize===h.PageSizes.Custom&&this.reportLayout.size&&(a=this.reportLayout.size),a=h.getPageSizeInPixels(a,this.reportLayout.dpi));b=this.reportLayout.orientation.Type===h.Orientation.Landscape.Type&&this.reportLayout.pageSize!==h.PageSizes.Custom?a.Height:a.Width;this._sizeInPixels=a;p.set(c,{width:b+"px"})},_setReportData:function(a){var b=e.byId("reportData"),c=e.byId("showErrorButton");c.innerHTML=this.nls.unableToPrintMapMsg;
b&&m.forEach(a,g.hitch(this,function(a){var d=f.create("div",{},b);a.addPageBreak&&k.add(d,"esriCTPageBreak");"table"===a.type?this._formatAndRenderTables(d,a):"html"===a.type?this._renderHTMLData(d,a):"map"===a.type?(a.title&&this._addSectionTitle(a.title,d),k.add(d,"esriCTReportMap esriCTReportMapWait"),a.extent&&a.data.map.setExtent(a.extent),this._executePrintTask(a,d,c)):"note"===a.type&&this._createReportNote(d,a)}))},_setFootNotes:function(){var a,b;(b=e.byId("footNotes"))&&this.footNotes&&
(a=l.sanitizeHTML(this.footNotes?this.footNotes:""),b.innerHTML=l.fieldFormatter.getFormattedUrl(a))},_setReportLogo:function(){var a,b,c,d;(a=e.byId("reportLogo"))&&this.reportLogo&&(k.remove(a,"esriCTHidden"),a.src=this.reportLogo,d=e.byId("reportHeader"),b=e.byId("reportMain"),c=e.byId("printTitleDiv"),window.isRTL&&f.place(c,d,"first"),b&&c&&(a.complete&&p.set(c,{width:b.clientWidth-a.clientWidth-51+"px"}),this.own(r(a,"load",g.hitch(this,function(){setTimeout(g.hitch(this,function(){p.set(c,
{width:b.clientWidth-a.clientWidth-51+"px"})}),100)})))))},_setReportTitle:function(a){var b=e.byId("reportTitle");b&&a&&(b.value=a)},_createReportNote:function(a,b){var c,d="",e;b.title&&(d=b.title);d=this._addSectionTitle(d,a);k.add(d,"esriCTNotesTitle");c=f.create("textarea",{"class":"esriCTReportNotes",placeholder:this.nls.notesHint,rows:5},a);e=f.create("p",{"class":"esriCTReportNotesParagraph"},a);k.add(a,"esriCTNotesContainer");b.defaultText&&(c.value=b.defaultText);this.own(r(c,"keydown, change",
function(){c.style.height="auto";e.innerHTML=l.sanitizeHTML(c.value?c.value:"");c.style.height=c.scrollHeight+"px"}))},_setReportSizeMessage:function(){var a,b;this.reportLayout.pageSize===h.PageSizes.Custom&&this.reportLayout.size?(a=this.reportLayout.size,b=this.reportLayout.pageSize):(a=this.reportLayout.pageSize,b=this.reportLayout.pageSize.SizeName);a=this.reportLayout.orientation.Type===h.Orientation.Landscape.Type&&this.reportLayout.pageSize!==h.PageSizes.Custom?" ("+a.Height+"'' X "+a.Width+
"'') ":" ("+a.Width+"'' X "+a.Height+"'') ";e.byId("reportBarMsg").innerHTML=y.substitute(this.nls.reportDimensionsMsg,{paperSize:b+a+this.reportLayout.orientation.Text})},_setButtonLabels:function(){var a=e.byId("printButton");a.innerHTML=this.nls.printButtonLabel;a.title=this.nls.printButtonLabel;a=e.byId("closeButton");a.innerHTML=this.nls.close;a.title=this.nls.close},_executePrintTask:function(a,b,c){a=this._createPrintMapParameters(a);this._printService.execute(a,g.hitch(this,function(a){b&&
(k.remove(b,"esriCTReportMapWait"),a=f.create("img",{src:a.url,"class":"esriCTReportMapImg"},b),this.reportLayout.orientation.Type===h.Orientation.Landscape.Type&&k.add(a,"esriCTReportLandscapeMapImg"))}),g.hitch(this,function(){k.replace(b,"esriCTReportMapFail","esriCTPageBreak esriCTReportMapWait");this._shownUnableToPrintMapMsg||(this._shownUnableToPrintMapMsg=!0,c.click())}))},_renderHTMLData:function(a,b){var c;c=f.create("div",{"class":"esriCTHTMLData"},a);b.title&&this._addSectionTitle(b.title,
c);f.create("div",{innerHTML:b.data},c)},_addSectionTitle:function(a,b){var c=l.sanitizeHTML(a?a:"");return f.create("div",{innerHTML:c,"class":c?"esriCTSectionTitle":""},b)},_formatAndRenderTables:function(a,b){var c=b.data,d,e,h,g,k=this.maxNoOfCols;c.maxNoOfCols&&(k=c.maxNoOfCols);d=0;for(e=c.cols.length;d<e;d+=k){var n={cols:[],rows:[]};n.title=0===d?b.title:"";h=c.cols.slice(d,d+k);g=[];for(var q=0;q<c.rows.length;q++)g.push(c.rows[q].slice(d,d+k));n.cols=h;n.rows=g;this._renderTable(f.create("div",
{},a),n,b.data.showRowIndex)}},_renderTable:function(a,b,c){var d,e;this._addSectionTitle(b.title,a);a=f.create("table",{cellpadding:5,style:{width:"100%"},"class":"esriCTTable"},a);d=f.create("tbody",{},a);e=f.create("tr",{},d);c&&f.create("th",{innerHTML:"#",style:{width:"20px"}},e);m.forEach(b.cols,g.hitch(this,function(a){f.create("th",{innerHTML:a},e)}));m.forEach(b.rows,g.hitch(this,function(a,b){var e;e=f.create("tr",{},d);c&&f.create("td",{innerHTML:b+1,style:{"word-wrap":"normal"}},e);m.forEach(a,
g.hitch(this,function(a){var b=l.fieldFormatter.getFormattedUrl(a),b=f.create("td",{innerHTML:b},e);this.alignNumbersToRight&&!isNaN(parseFloat(a))&&k.add(b,"esriCTNumber")}))}))}})});