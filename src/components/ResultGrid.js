import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

// get data
// //https://en.wikipedia.org/wiki/List_of_charitable_foundations
// //https://www.dzi.de/spenderberatung/das-spenden-siegel/liste-aller-spenden-siegel-organisationen-a-z/
// //https://www.netzwerk-ebd.de/member-category/gemeinnuetzige-organisationen/?set-view-type=fulllist
// //https://edelmut.org/organisationen/
// //file:///C:/Users/steph/Downloads/gemeinnuetzige_organisationen.pdf als excel/json anfragen?
// //https://www.unitedcharity.de/Hilfsorganisationen/Organisationen
// //https://www.charitynavigator.org/

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },
// ];

export default function ResultGrid() {

    const columns = [
      {
          headerName: "Region",
          field: "regions",
          type: "string",
          // filterValues: typeof qs.regions === 'string' ? qs.regions.split(',') : [],
          width: 200,
      }, {
          headerName: "Name",
          field: "name",
          type: "string",
          width: 400
          // cellTemplate: function(container, options) {
          //     container.addClass("name-cell");
          //     container.append(options.data['name']);
          // },
      }, {
          headerName: "Categories",
          field: "categories",
          width: 200,
          type: "string",
          valueGetter: (params) => 
            `${params.categories ? params.categories.toString() : ''}`,
          // filterValues: typeof qs.categories === 'string' ? qs.categories.split(',') : [],
          // headerFilter: {
          //     //TODO: put selected values on top of list
          //     dataSource: [{"value":"animals","text":"animals"},{"value":"alcohol","text":"alcohol"},{"value":"drugs","text":"drugs"},{"value":"culture","text":"culture"},{"value":"community","text":"community"},{"value":"disabled","text":"disabled"},{"value":"family","text":"family"},{"value":"youth","text":"youth"},{"value":"kids","text":"kids"},{"value":"sport","text":"sport"},{"value":"violence","text":"violence"},{"value":"education","text":"education"},{"value":"environment","text":"environment"},{"value":"health","text":"health"},{"value":"old age","text":"old age"},{"value":"unemployment","text":"unemployment"},{"value":"rights","text":"rights"},{"value":"religion","text":"religion"},{"value":"research","text":"research"}]
          // },
          // cellTemplate: function(container, options) {
          //     container.addClass("category-cell");
    
          //     var htmlString = '';
    
          //     for (var i in options.data['categories'])
          //         htmlString += '<span class="category-tag ' + (options.column.filterValues && options.column.filterValues.indexOf(options.data['categories'][i].name) > -1 ? 'category-tag-primary' : '') + '">' + options.data['categories'][i].name + '</span>';
    
          //     container.append(htmlString);
          // },
          // calculateFilterExpression: function (value, operation, target) {
          //     var column = this;
          //     console.log(value);
    
          //     if (!value)
          //         return;
    
          //     let filterExpression = [];
    
          //     for (let i = 0; i < column.filterValues.length; i++) {
          //         if (i !== 0)
          //             filterExpression.push("or")
          //             // filterExpression.push("and")
    
          //         filterExpression.push(["categories", "contains", column.filterValues[i]]);
          //     }
    
          //     return filterExpression;
          // },
          // calculateCellValue: function (data) {
          //     return $.map(data['categories'], function (o) {
          //         return o.name;
          //     });
          // }
    }];
    
  return (
    <section id="searchResults">
      <h3>Search Results</h3>
      <div id="charitiesGrid" style={{ height: 400, width: '100%' }}>
        <DataGrid rows={data} columns={columns} pageSize={20} checkboxSelection />
      </div>
    </section>
  );
}


const data = [
  {
     "regions":"Germany",
     "name":"action medeor - Deutsches Medikamenten-Hilfswerk e. V.",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"health"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.medeor.de",
     "id":0
  },
  {
     "regions":"Germany",
     "name":"AGAPEDIA Stiftung für Kinder, Soziales und Bildung gGmbH",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"health"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.agapedia.de",
     "id":1
  },
  {
     "regions":"Germany",
     "name":"Aktion Kulturland Gemeinnützige Stiftung für Landwirtschaft und Ökologie",
     "categories":[
        {
           "name":"culture"
        },
        {
           "name":"environment"
        },
        {
           "name":"community"
        },
        {
           "name":"animals"
        }
     ],
     "link":"www.aktion-kulturland.de",
     "id":2
  },
  {
     "regions":"Germany",
     "name":"Aktion Sonnenschein - Hilfe für das mehrfach behinderte Kind",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        }
     ],
     "link":"www.aktionsonnenschein.com",
     "id":3
  },
  {
     "regions":"Germany",
     "name":"Albert-Schweitzer-Kinderdorf Hessen e.V.",
     "categories":[
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.ask-hessen.de",
     "id":4
  },
  {
     "regions":"Germany",
     "name":"Albert-Schweitzer-Kinderdörfer und Familienwerke e.V. Bundesverband",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.albert-schweitzer-verband.de",
     "id":5
  },
  {
     "regions":"Germany",
     "name":"Alzheimer Forschung Initiative e.V.",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"health"
        },
        {
           "name":"research"
        }
     ],
     "link":"www.alzheimer-forschung.de",
     "id":6
  },
  {
     "regions":"Germany",
     "name":"Amnesty International Deutschland e.V.",
     "categories":[
        {
           "name":"developing countries"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.amnesty.de/testament",
     "id":7
  },
  {
     "regions":"Germany",
     "name":"AMSEL, Aktion Multiple Sklerose Erkrankter Landesverband der DMSG in Baden-Württemberg e.V.",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.amsel.de",
     "id":8
  },
  {
     "regions":"Germany",
     "name":"ANDHERI HILFE e.V.",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"kids"
        },
        {
           "name":"environment"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.andheri-hilfe.org",
     "id":9
  },
  {
     "regions":"Germany",
     "name":"Animals' Angels e.V.",
     "categories":[
        {
           "name":"animals"
        }
     ],
     "link":"www.animals-angels.de",
     "id":10
  },
  {
     "regions":"Germany",
     "name":"Ärzte ohne Grenzen e.V.",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"health"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"kids"
        }
     ],
     "link":"www.aerzte-ohne-grenzen.de",
     "id":11
  },
  {
     "regions":"Germany",
     "name":"AtemWeg - Stiftung zur Erforschung von Lungenkrankheiten",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"research"
        }
     ],
     "link":"www.atemweg-stiftung.de",
     "id":12
  },
  {
     "regions":"Germany",
     "name":"Augustinum Stiftung",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        }
     ],
     "link":"www.moeglichmacherwerden.de",
     "id":13
  },
  {
     "regions":"Germany",
     "name":"Bärenherz Stiftung",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        }
     ],
     "link":"www.baerenherz.de",
     "id":14
  },
  {
     "regions":"Germany",
     "name":"Berner Sennenhunde in Not e.V.",
     "categories":[
        {
           "name":"environment"
        },
        {
           "name":"animals"
        }
     ],
     "link":"www.berner-sennenhunde-in-not.de",
     "id":15
  },
  {
     "regions":"Germany",
     "name":"Bethanien Kinder- und Jugenddorf Bergisch Gladbach",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.bethanien-kinderdoerfer.de",
     "id":16
  },
  {
     "regions":"Germany",
     "name":"Bethanien Kinder- und Jugenddorf Eltville",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.bethanien-kinderdoerfer.de",
     "id":17
  },
  {
     "regions":"Germany",
     "name":"Bethanien Kinderdörfer gGmbH",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.bethanien-kinderdoerfer.de",
     "id":18
  },
  {
     "regions":"Germany",
     "name":"Björn Schulz Stiftung",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.bjoern-schulz-stiftung.de",
     "id":19
  },
  {
     "regions":"Germany",
     "name":"Bund für Umwelt und Naturschutz Deutschland -BUND-, Landesverband Baden-Württemberg e.V.",
     "categories":[
        {
           "name":"environment"
        }
     ],
     "link":"www.bund-bawue.de",
     "id":20
  },
  {
     "regions":"Germany",
     "name":"Bundesverband Selbsthilfe Körperbehinderter e.V.",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.bsk-ev.org",
     "id":21
  },
  {
     "regions":"Germany",
     "name":"Bundesvereinigung Lebenshilfe e.V.",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.lebenshilfe.de",
     "id":22
  },
  {
     "regions":"Germany",
     "name":"Cap Anamur/Deutsche Not-Ärzte e.V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.cap-anamur.org",
     "id":23
  },
  {
     "regions":"Germany",
     "name":"Caritas-Gemeinschaftsstiftung für das Bistum Aachen",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"poverty"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.caritasstiftung-aachen.de",
     "id":24
  },
  {
     "regions":"Germany",
     "name":"Claudia Lucas Stiftung",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        }
     ],
     "link":"www.claudia-lucas-stiftung.de",
     "id":25
  },
  {
     "regions":"Germany",
     "name":"Conpart e.V.",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.conpart-bremen.de",
     "id":26
  },
  {
     "regions":"Germany",
     "name":"CVJM-Gesamtverband in Deutschland e. V.",
     "categories":[
        {
           "name":"developing countries"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"religion"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.cvjm.de",
     "id":27
  },
  {
     "regions":"Germany",
     "name":"Deutsche AIDS-Stiftung",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"health"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"family"
        }
     ],
     "link":"www.aids-stiftung.de",
     "id":28
  },
  {
     "regions":"Germany",
     "name":"Deutsche Alzheimer Gesellschaft e. V. Selbsthilfe Demenz",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.deutsche-alzheimer.de",
     "id":29
  },
  {
     "regions":"Germany",
     "name":"Deutsche Arthrose-Hilfe e.V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"Krankheitswesen"
        }
     ],
     "link":"www.arthrose.de",
     "id":30
  },
  {
     "regions":"Germany",
     "name":"Deutsche Demenzhilfe - DZNE-Stiftung für Forschung und Innovation",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"research"
        }
     ],
     "link":"www.deutsche-demenzhilfe.com",
     "id":31
  },
  {
     "regions":"Germany",
     "name":"Deutsche Gesellschaft zur Rettung Schiffbrüchiger",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"research"
        },
        {
           "name":"environment"
        },
        {
           "name":"sport"
        }
     ],
     "link":"www.seenotretter.de",
     "id":32
  },
  {
     "regions":"Germany",
     "name":"Deutsche Hirntumorhilfe e.V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"research"
        }
     ],
     "link":"www.hirntumorhilfe.de",
     "id":33
  },
  {
     "regions":"Germany",
     "name":"Deutsche KinderKrebshilfe der Deutschen Krebshilfe (Stiftung)",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"research"
        }
     ],
     "link":"www.kinderkrebshilfe.de",
     "id":34
  },
  {
     "regions":"Germany",
     "name":"Deutsche Krebshilfe (Stiftung )",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"research"
        }
     ],
     "link":"www.krebshilfe.de",
     "id":35
  },
  {
     "regions":"Germany",
     "name":"Deutsche Rheuma-Liga Bundesverband e.V.",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"youth"
        },
        {
           "name":"research"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.rheuma-liga.de",
     "id":36
  },
  {
     "regions":"Germany",
     "name":"Deutsche Stiftung für Demenzerkrankte - Wilhelm von Lauff-Stiftung",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"family"
        },
        {
           "name":"health"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.demenzstiftung.de",
     "id":37
  },
  {
     "regions":"Germany",
     "name":"Deutscher Kinderhospizverein e.V.",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.deutscher-kinderhospizverein.de",
     "id":38
  },
  {
     "regions":"Germany",
     "name":"Deutscher Kinderschutzbund Kreisverband Ahrweiler e.V.",
     "categories":[
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.kinderschutzbund-ahrweiler.de",
     "id":39
  },
  {
     "regions":"Germany",
     "name":"Deutscher Tierschutzbund e. V.",
     "categories":[
        {
           "name":"research"
        },
        {
           "name":"environment"
        },
        {
           "name":"animals"
        }
     ],
     "link":"www.tierschutzbund.de",
     "id":40
  },
  {
     "regions":"Germany",
     "name":"Deutsches Katholisches Blindenwerk e.V.",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"religion"
        }
     ],
     "link":"www.blindenwerk.de",
     "id":41
  },
  {
     "regions":"Germany",
     "name":"DRF Luftrettung - DRF e.V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"community"
        }
     ],
     "link":"drf-luftrettung.de",
     "id":42
  },
  {
     "regions":"Germany",
     "name":"Elterninitiative für krebskranke Kinder Jena e.V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.ekk-jena.de",
     "id":43
  },
  {
     "regions":"Germany",
     "name":"Evangelische Erziehungsstiftung Gefrees",
     "categories":[
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"religion"
        },
        {
           "name":"culture"
        }
     ],
     "link":"www.jesgefrees.de",
     "id":44
  },
  {
     "regions":"Germany",
     "name":"Evangelische Stiftung Alsterdorf",
     "categories":[
        {
           "name":"alcohol"
        },
        {
           "name":"drugs"
        },
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        },
        {
           "name":"community"
        },
        {
           "name":"sport"
        }
     ],
     "link":"www.alsterdorf.de",
     "id":45
  },
  {
     "regions":"Germany",
     "name":"Evangelische Stiftung Lichtenstern",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.lichtenstern.de",
     "id":46
  },
  {
     "regions":"Germany",
     "name":"Evangelische Stiftung Volmarstein",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"research"
        },
        {
           "name":"religion"
        }
     ],
     "link":"www.volmarstein.info",
     "id":47
  },
  {
     "regions":"Germany",
     "name":"Evangelisches Johannesstift SbR",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.evangelisches-johannesstift.de",
     "id":48
  },
  {
     "regions":"Germany",
     "name":"Fördergemeinschaft Deutsche Kinderherzzentren e.V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"research"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.kinderherzen.de",
     "id":49
  },
  {
     "regions":"Germany",
     "name":"Forschungsinstitut Kinderkrebs-Zentrum Hamburg",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"research"
        }
     ],
     "link":"www.kinderkrebs-forschung.de",
     "id":50
  },
  {
     "regions":"Germany",
     "name":"Frauen helfen Frauen e.V.",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.fhf-stuttgart.de",
     "id":51
  },
  {
     "regions":"Germany",
     "name":"Freunde alter Menschen e.V.",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"health"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.famev.de",
     "id":52
  },
  {
     "regions":"Germany",
     "name":"Gebrüder-Gründler-Stiftung",
     "categories":[
        {
           "name":"alcohol"
        },
        {
           "name":"drugs"
        },
        {
           "name":"old age"
        },
        {
           "name":"health"
        },
        {
           "name":"kids"
        }
     ],
     "link":"www.gruendler-stiftung.org",
     "id":53
  },
  {
     "regions":"Germany",
     "name":"Gemeinschaftszentrum Sönke-Nissen-Park Stiftung",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"poverty"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"culture"
        }
     ],
     "link":"www.gutshaus-glinde.de",
     "id":54
  },
  {
     "regions":"Germany",
     "name":"Global Nature Fund (GNF)",
     "categories":[
        {
           "name":"developing countries"
        },
        {
           "name":"environment"
        },
        {
           "name":"animals"
        }
     ],
     "link":"www.globalnature.org",
     "id":55
  },
  {
     "regions":"Germany",
     "name":"Goethe-Universität Frankfurt am Main",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"youth"
        },
        {
           "name":"research"
        },
        {
           "name":"culture"
        }
     ],
     "link":"http://www.uni-frankfurt.de",
     "id":56
  },
  {
     "regions":"Germany",
     "name":"Habitat für Humanity Deutschland e.V.",
     "categories":[
        {
           "name":"developing countries"
        }
     ],
     "link":"www.habitatforhumanity.de",
     "id":57
  },
  {
     "regions":"Germany",
     "name":"Hans-Rosenthal-Stiftung - schnelle Hilfe in akuter Not - e.V.",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"poverty"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.hans-rosenthal-stiftung.de",
     "id":58
  },
  {
     "regions":"Germany",
     "name":"Helping Hands e.V.  Wirkungsvoll helfen · Nachhaltig verändern",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.helpinghandsev.org",
     "id":59
  },
  {
     "regions":"Germany",
     "name":"Hinz&amp;Kunzt",
     "categories":[
        {
           "name":"alcohol"
        },
        {
           "name":"drugs"
        },
        {
           "name":"old age"
        },
        {
           "name":"poverty"
        },
        {
           "name":"unemployment"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.hinzundkunzt.de",
     "id":60
  },
  {
     "regions":"Germany",
     "name":"humedica e.V.",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"health"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        }
     ],
     "link":"www.humedica.org",
     "id":61
  },
  {
     "regions":"Germany",
     "name":"INTACT Mädchenhilfe, Internationale Aktion gegen die Beschneidung von Mädchen und Frauen e.V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.intact-ev.de",
     "id":62
  },
  {
     "regions":"Germany",
     "name":"Internationale Christliche Botschaft Jerusalem - Deutscher Zweig e. V. (kurz: ICEJ e. V.)",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"youth"
        },
        {
           "name":"religion"
        },
        {
           "name":"culture"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.icej.de",
     "id":63
  },
  {
     "regions":"Germany",
     "name":"IRIS-STIFTUNG",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.iris-stiftung.de",
     "id":64
  },
  {
     "regions":"Germany",
     "name":"J. Wilh. Tenten Stiftung",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"poverty"
        },
        {
           "name":"disabled"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.tenten-stiftung.de",
     "id":65
  },
  {
     "regions":"Germany",
     "name":"KARO e.V.",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.karo-ev.de",
     "id":66
  },
  {
     "regions":"Germany",
     "name":"Katholische Jugendfürsorge der Erzdiözese München und Freising e.V.",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.kjf-muenchen.de",
     "id":67
  },
  {
     "regions":"Germany",
     "name":"Kinder von Tschernobyl - Stiftung des Landes Niedersachsen",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"kids"
        }
     ],
     "link":"www.tschernobyl.niedersachsen.de",
     "id":68
  },
  {
     "regions":"Germany",
     "name":"Kinder- und Jugendhospizstiftung Balthasar",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        }
     ],
     "link":"www.balthasarstiftung.de",
     "id":69
  },
  {
     "regions":"Germany",
     "name":"Kinderheim Kleine Strolche e.V. - Hilfe für traumatisierte Kinder",
     "categories":[
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.kinderheim-kleine-strolche.de",
     "id":70
  },
  {
     "regions":"Germany",
     "name":"kinderherzen - Fördergemeinschaft Deutsche Kinderherzzentren e.V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"research"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.kinderherzen.de",
     "id":71
  },
  {
     "regions":"Germany",
     "name":"KINDERHILFE - Hilfe für krebs- und schwerkranke Kinder e.V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.kinderhilfe-ev.de",
     "id":72
  },
  {
     "regions":"Germany",
     "name":"Kinderrechte Afrika e.V. - Zukunft für Kinder in Not",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        }
     ],
     "link":"www.kinderrechte-afrika.org",
     "id":73
  },
  {
     "regions":"Germany",
     "name":"Kinderschutzbund Aachen e.V.",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.kinderschutzbund-aachen.de",
     "id":74
  },
  {
     "regions":"Germany",
     "name":"Konrad-Adenauer-Stiftung e.V.",
     "categories":[
        {
           "name":"developing countries"
        },
        {
           "name":"research"
        },
        {
           "name":"culture"
        }
     ],
     "link":"kas.de",
     "id":75
  },
  {
     "regions":"Germany",
     "name":"Krebsverband Baden-Württemberg e. V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.krebsverband-bw.de",
     "id":76
  },
  {
     "regions":"Germany",
     "name":"Kurt-Hahn-Stiftung c/o Deutsches Stiftungszentrum GmbH",
     "categories":[
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.kurt-hahn-stiftung.de",
     "id":77
  },
  {
     "regions":"Germany",
     "name":"Lebenszentrum Königsborn für Menschen mit Behinderungen",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        }
     ],
     "link":"www.lebenszentrum-koenigsborn.de",
     "id":78
  },
  {
     "regions":"Germany",
     "name":"Leonhard gemeinnützige GmbH | Unternehmertum für Gefangene",
     "categories":[
        {
           "name":"alcohol"
        },
        {
           "name":"drugs"
        },
        {
           "name":"poverty"
        },
        {
           "name":"unemployment"
        },
        {
           "name":"culture"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.leonhard.eu",
     "id":79
  },
  {
     "regions":"Germany",
     "name":"Lichtbrücke e. V.",
     "categories":[
        {
           "name":"developing countries"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.lichtbruecke.com",
     "id":80
  },
  {
     "regions":"Germany",
     "name":"MainLichtblick e. V.",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.mainlichtblick.de",
     "id":81
  },
  {
     "regions":"Germany",
     "name":"Maria im Tann, Zentrum für Kinder-, Jugend- u. Familienhilfe",
     "categories":[
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        }
     ],
     "link":"www.mariaimtann.de",
     "id":82
  },
  {
     "regions":"Germany",
     "name":"Medica mondiale e. V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"youth"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.medicamondiale.org",
     "id":83
  },
  {
     "regions":"Germany",
     "name":"Mercy Ships Deutschland e.V.",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"health"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.mercyships.de",
     "id":84
  },
  {
     "regions":"Germany",
     "name":"missio-Internationales Katholisches Missionswerk e.V.",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"religion"
        }
     ],
     "link":"www.missio-hilft.de",
     "id":85
  },
  {
     "regions":"Germany",
     "name":"Mütter- und FamilienZentrum Ingelheim e.V. ( MütZe e.V.)",
     "categories":[
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.muetze-ingelheim.de",
     "id":86
  },
  {
     "regions":"Germany",
     "name":"NABU Naturschutzbund e.V. Bundesgeschäftsstelle",
     "categories":[
        {
           "name":"environment"
        },
        {
           "name":"animals"
        }
     ],
     "link":"www.NABU.de",
     "id":87
  },
  {
     "regions":"Germany",
     "name":"Niedersächsische Krebsgesellschaft e.V.",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"research"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.nds-krebsgesellschaft.de",
     "id":88
  },
  {
     "regions":"Germany",
     "name":"Niedersächsische Krebsstiftung",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"research"
        }
     ],
     "link":"www.nds-krebsstiftung.de",
     "id":89
  },
  {
     "regions":"Germany",
     "name":"Nikolauspflege - Stiftung für blinde und sehbehinderte Menschen",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.nikolauspflege.de",
     "id":90
  },
  {
     "regions":"Germany",
     "name":"PRO RETINA Deutschland e.V.",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"disabled"
        },
        {
           "name":"health"
        },
        {
           "name":"kids"
        },
        {
           "name":"research"
        }
     ],
     "link":"www.pro-retina.de",
     "id":91
  },
  {
     "regions":"Germany",
     "name":"Rittergut Kleine Strolche gGmbH - Therapiezentrum für traumatisierte Kinder",
     "categories":[
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.kinderheim-kleine-strolche.de",
     "id":92
  },
  {
     "regions":"Germany",
     "name":"ROTE NASEN Deutschland e.V.",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"health"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"culture"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.rotenasen.de",
     "id":93
  },
  {
     "regions":"Germany",
     "name":"Rummelsberger Diakonie e.V.",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"religion"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.rummelsberger-diakonie.de",
     "id":94
  },
  {
     "regions":"Germany",
     "name":"Sächsische Krebsgesellschaft e.V.",
     "categories":[
        {
           "name":"health"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.skg-ev.de",
     "id":95
  },
  {
     "regions":"Germany",
     "name":"SAVE Wildlife Conservation Fund - Stiftung",
     "categories":[
        {
           "name":"developing countries"
        },
        {
           "name":"culture"
        },
        {
           "name":"environment"
        },
        {
           "name":"community"
        },
        {
           "name":"animals"
        }
     ],
     "link":"www.save-wildlife.org",
     "id":96
  },
  {
     "regions":"Germany",
     "name":"SOS-Kinderdorf-Stiftung",
     "categories":[
        {
           "name":"disabled"
        },
        {
           "name":"family"
        },
        {
           "name":"youth"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.sos-kinderdorf-stiftung.de",
     "id":97
  },
  {
     "regions":"Germany",
     "name":"SOS-Kinderdörfer weltweit",
     "categories":[
        {
           "name":"poverty"
        },
        {
           "name":"developing countries"
        },
        {
           "name":"family"
        },
        {
           "name":"kids"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.sos-kinderdoerfer.de",
     "id":98
  },
  {
     "regions":"Greece",
     "name":"SoVD Sozialverband Deutschland, Landesverband NRW",
     "categories":[
        {
           "name":"old age"
        },
        {
           "name":"unemployment"
        },
        {
           "name":"disabled"
        },
        {
           "name":"family"
        },
        {
           "name":"community"
        }
     ],
     "link":"www.sovd-nrw.de",
     "id":99
  }
];