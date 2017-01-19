var codes = [
    ["af", "AFG", "Afghanistan"],
    ["ax", "ALA", "Åland Islands"],
    ["al", "ALB", "Albania"],
    ["dz", "DZA", "Algeria"],
    ["as", "ASM", "American Samoa"],
    ["ad", "AND", "Andorra"],
    ["ao", "AGO", "Angola"],
    ["ai", "AIA", "Anguilla"],
    ["aq", "ATA", "Antarctica"],
    ["ag", "ATG", "Antigua and Barbuda"],
    ["ar", "ARG", "Argentina"],
    ["am", "ARM", "Armenia"],
    ["aw", "ABW", "Aruba"],
    ["au", "AUS", "Australia"],
    ["at", "AUT", "Austria"],
    ["az", "AZE", "Azerbaijan"],
    ["bs", "BHS", "Bahamas"],
    ["bh", "BHR", "Bahrain"],
    ["bd", "BGD", "Bangladesh"],
    ["bb", "BRB", "Barbados"],
    ["by", "BLR", "Belarus"],
    ["be", "BEL", "Belgium"],
    ["bz", "BLZ", "Belize"],
    ["bj", "BEN", "Benin"],
    ["bm", "BMU", "Bermuda"],
    ["bt", "BTN", "Bhutan"],
    ["bo", "BOL", "Bolivia"],
    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
    ["ba", "BIH", "Bosnia and Herzegovina"],
    ["bw", "BWA", "Botswana"],
    ["bv", "BVT", "Bouvet Island"],
    ["br", "BRA", "Brazil"],
    ["io", "IOT", "British Indian Ocean Territory"],
    ["bn", "BRN", "Brunei Darussalam"],
    ["bg", "BGR", "Bulgaria"],
    ["bf", "BFA", "Burkina Faso"],
    ["bi", "BDI", "Burundi"],
    ["kh", "KHM", "Cambodia"],
    ["cm", "CMR", "Cameroon"],
    ["ca", "CAN", "Canada"],
    ["cv", "CPV", "Cape Verde"],
    ["ky", "CYM", "Cayman Islands"],
    ["cf", "CAF", "Central African Republic"],
    ["td", "TCD", "Chad"],
    ["cl", "CHL", "Chile"],
    ["cn", "CHN", "China"],
    ["cx", "CXR", "Christmas Island"],
    ["cc", "CCK", "Cocos (Keeling) Islands"],
    ["co", "COL", "Colombia"],
    ["km", "COM", "Comoros"],
    ["cg", "COG", "Republic of the Congo"],
    ["cd", "COD", "Democratic Republic of the Congo"],
    ["ck", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "Ivory Coast"],
    ["hr", "HRV", "Croatia"],
    ["cu", "CUB", "Cuba"],
    ["cw", "CUW", "Curaçao"],
    ["cy", "CYP", "Cyprus"],
    ["cz", "CZE", "Czech Republic"],
    ["dk", "DNK", "Denmark"],
    ["dj", "DJI", "Djibouti"],
    ["dm", "DMA", "Dominica"],
    ["do", "DOM", "Dominican Republic"],
    ["ec", "ECU", "Ecuador"],
    ["eg", "EGY", "Egypt"],
    ["sv", "SLV", "El Salvador"],
    ["gq", "GNQ", "Equatorial Guinea"],
    ["er", "ERI", "Eritrea"],
    ["ee", "EST", "Estonia"],
    ["et", "ETH", "Ethiopia"],
    ["fk", "FLK", "Falkland Islands (Malvinas)"],
    ["fo", "FRO", "Faroe Islands"],
    ["fj", "FJI", "Fiji"],
    ["fi", "FIN", "Finland"],
    ["fr", "FRA", "France"],
    ["gf", "GUF", "French Guiana"],
    ["pf", "PYF", "French Polynesia"],
    ["tf", "ATF", "French Southern Territories"],
    ["ga", "GAB", "Gabon"],
    ["gm", "GMB", "Gambia"],
    ["ge", "GEO", "Georgia"],
    ["de", "DEU", "Germany"],
    ["gh", "GHA", "Ghana"],
    ["gi", "GIB", "Gibraltar"],
    ["gr", "GRC", "Greece"],
    ["gl", "GRL", "Greenland"],
    ["gd", "GRD", "Grenada"],
    ["gp", "GLP", "Guadeloupe"],
    ["gu", "GUM", "Guam"],
    ["gt", "GTM", "Guatemala"],
    ["gg", "GGY", "Guernsey"],
    ["gn", "GIN", "Guinea"],
    ["gw", "GNB", "Guinea-Bissau"],
    ["gy", "GUY", "Guyana"],
    ["ht", "HTI", "Haiti"],
    ["hm", "HMD", "Heard Island and McDonald Islands"],
    ["va", "VAT", "Holy See (Vatican City State)"],
    ["hn", "HND", "Honduras"],
    ["hk", "HKG", "Hong Kong"],
    ["hu", "HUN", "Hungary"],
    ["is", "ISL", "Iceland"],
    ["in", "IND", "India"],
    ["id", "IDN", "Indonesia"],
    ["ir", "IRN", "Iran"],
    ["iq", "IRQ", "Iraq"],
    ["ie", "IRL", "Ireland"],
    ["im", "IMN", "Isle of Man"],
    ["il", "ISR", "Israel"],
    ["it", "ITA", "Italy"],
    ["jm", "JAM", "Jamaica"],
    ["jp", "JPN", "Japan"],
    ["je", "JEY", "Jersey"],
    ["jo", "JOR", "Jordan"],
    ["kz", "KAZ", "Kazakhstan"],
    ["ke", "KEN", "Kenya"],
    ["ki", "KIR", "Kiribati"],
    ["kp", "PRK", "North Korea"],
    ["kr", "KOR", "South Korea"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Laos"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia"],
    ["mg", "MDG", "Madagascar"],
    ["mw", "MWI", "Malawi"],
    ["my", "MYS", "Malaysia"],
    ["mv", "MDV", "Maldives"],
    ["ml", "MLI", "Mali"],
    ["mt", "MLT", "Malta"],
    ["mh", "MHL", "Marshall Islands"],
    ["mq", "MTQ", "Martinique"],
    ["mr", "MRT", "Mauritania"],
    ["mu", "MUS", "Mauritius"],
    ["yt", "MYT", "Mayotte"],
    ["mx", "MEX", "Mexico"],
    ["fm", "FSM", "Micronesia, Federated States of"],
    ["md", "MDA", "Moldova"],
    ["mc", "MCO", "Monaco"],
    ["mn", "MNG", "Mongolia"],
    ["me", "MNE", "Montenegro"],
    ["ms", "MSR", "Montserrat"],
    ["ma", "MAR", "Morocco"],
    ["mz", "MOZ", "Mozambique"],
    ["mm", "MMR", "Myanmar"],
    ["na", "NAM", "Namibia"],
    ["nr", "NRU", "Nauru"],
    ["np", "NPL", "Nepal"],
    ["nl", "NLD", "Netherlands"],
    ["nc", "NCL", "New Caledonia"],
    ["nz", "NZL", "New Zealand"],
    ["ni", "NIC", "Nicaragua"],
    ["ne", "NER", "Niger"],
    ["ng", "NGA", "Nigeria"],
    ["nu", "NIU", "Niue"],
    ["nf", "NFK", "Norfolk Island"],
    ["mp", "MNP", "Northern Mariana Islands"],
    ["no", "NOR", "Norway"],
    ["om", "OMN", "Oman"],
    ["pk", "PAK", "Pakistan"],
    ["pw", "PLW", "Palau"],
    ["ps", "PSE", "Palestine, State of"],
    ["pa", "PAN", "Panama"],
    ["pg", "PNG", "Papua New Guinea"],
    ["py", "PRY", "Paraguay"],
    ["pe", "PER", "Peru"],
    ["ph", "PHL", "Philippines"],
    ["pn", "PCN", "Pitcairn"],
    ["pl", "POL", "Poland"],
    ["pt", "PRT", "Portugal"],
    ["pr", "PRI", "Puerto Rico"],
    ["qa", "QAT", "Qatar"],
    ["re", "REU", "Réunion"],
    ["ro", "ROU", "Romania"],
    ["ru", "RUS", "Russia"],
    ["rw", "RWA", "Rwanda"],
    ["bl", "BLM", "Saint Barthélemy"],
    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
    ["kn", "KNA", "Saint Kitts and Nevis"],
    ["lc", "LCA", "Saint Lucia"],
    ["mf", "MAF", "Saint Martin (French part)"],
    ["pm", "SPM", "Saint Pierre and Miquelon"],
    ["vc", "VCT", "Saint Vincent and the Grenadines"],
    ["ws", "WSM", "Samoa"],
    ["sm", "SMR", "San Marino"],
    ["st", "STP", "Sao Tome and Principe"],
    ["sa", "SAU", "Saudi Arabia"],
    ["sn", "SEN", "Senegal"],
    ["rs", "SRB", "Serbia"],
    ["sc", "SYC", "Seychelles"],
    ["sl", "SLE", "Sierra Leone"],
    ["sg", "SGP", "Singapore"],
    ["sx", "SXM", "Sint Maarten (Dutch part)"],
    ["sk", "SVK", "Slovakia"],
    ["si", "SVN", "Slovenia"],
    ["sb", "SLB", "Solomon Islands"],
    ["so", "SOM", "Somalia"],
    ["za", "ZAF", "South Africa"],
    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
    ["ss", "SSD", "South Sudan"],
    ["es", "ESP", "Spain"],
    ["lk", "LKA", "Sri Lanka"],
    ["sd", "SDN", "Sudan"],
    ["sr", "SUR", "Suriname"],
    ["sj", "SJM", "Svalbard and Jan Mayen"],
    ["sz", "SWZ", "Swaziland"],
    ["se", "SWE", "Sweden"],
    ["ch", "CHE", "Switzerland"],
    ["sy", "SYR", "Syria"],
    ["tw", "TWN", "Taiwan"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania"],
    ["th", "THA", "Thailand"],
    ["tl", "TLS", "Timor-Leste"],
    ["tg", "TGO", "Togo"],
    ["tk", "TKL", "Tokelau"],
    ["to", "TON", "Tonga"],
    ["tt", "TTO", "Trinidad and Tobago"],
    ["tn", "TUN", "Tunisia"],
    ["tr", "TUR", "Turkey"],
    ["tm", "TKM", "Turkmenistan"],
    ["tc", "TCA", "Turks and Caicos Islands"],
    ["tv", "TUV", "Tuvalu"],
    ["ug", "UGA", "Uganda"],
    ["ua", "UKR", "Ukraine"],
    ["ae", "ARE", "United Arab Emirates"],
    ["gb", "GBR", "United Kingdom"],
    ["us", "USA", "United States of America"],
    ["um", "UMI", "United States Minor Outlying Islands"],
    ["uy", "URY", "Uruguay"],
    ["uz", "UZB", "Uzbekistan"],
    ["vu", "VUT", "Vanuatu"],
    ["ve", "VEN", "Venezuela"],
    ["vn", "VNM", "Vietnam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ];

    function getcountrycode(country){
    for(i = 0; i < codes.length; i++)
    {
        if(codes[i][2] == country)
        {
            return codes[i][1]; 
        }   
    }
}

    
function updatedata(religion){
    console.log("come on")
    d3.json("json.txt", function(data){
    for(p = 0; p < Number(data.length); p++)
    {
        data[p][religion] = Number(data[p][religion])
        console.log("je kan het")
        if(data[p][religion] > 75)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: ">75", percentage: data[p][religion]};
        }
        if(data[p][religion] <= 75 && data[p][religion] > 50)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "welke - 50", percentage: data[p][religion]};
        }
        if(data[p][religion] <= 50 && data[p][religion] > 10)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "50 - 10", percentage: data[p][religion]};
        }
        if(data[p][religion] <= 10 && data[p][religion] > 5)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "10 - 5", percentage: data[p][religion]};
        }
        if(data[p][religion] <= 5 && data[p][religion] > 1)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "5 - 1", percentage: data[p][religion]};
        }
        if(data[p][religion] <= 1 && data[p][religion] > 0.1)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "1 - .1", percentage: data[p][religion]};
        }
        if(data[p][religion] == 0.1)
        {
            dataset[getcountrycode(data[p].land)] = {fillKey: "< 0.1", percentage: data[p][religion]};
        }

    }
    d3.select("svg").remove()

    console.log(dataset);
    var map = new Datamap({
        // in container
        element: document.getElementById('containermap'),
        fills: {
            ">75": "#005824",
            "welke - 50": "#238b45",
            "50 - 10": "#41ae76",
            "10 - 5": "#66c2a4",
            "5 - 1": "#99d8c9",
            "1 - .1": "#ccece6",
            "< 0.1": "#e5f5f9",
            defaultFill: "black",
            "no data": "black",

        },
        data: dataset,
        geographyConfig: {
        popupTemplate: function(geography, dataset){
            return '<div class="hoverinfo">' + geography.properties.name + ": " + "percentage: " + dataset.percentage}
        },    
    });
    d3.select(".datamaps-legend").remove()
    map.legend()
    map.svg.selectAll('.datamaps-subunit').on('click', function(geography, data) {
    console.log(geography.properties.name);
    makepie(geography.properties.name);
    })   
})
}

function updatedatamost(){
    d3.json("json.txt", function(data){
        for(p = 0; p < data.length; p ++)
        {
            var temp = Number(data[p].christians);
            var religion = "christians"
            if(Number(data[p].muslim) > temp)
            {
                temp = Number(data[p].muslim)
                religion = "muslim"
            }
            if(Number(data[p].unaf) > temp)
            {
                temp = Number(data[p].unaf)
                religion = "unaf"
            }
            if(Number(data[p].hindu) > temp)
            {
                temp = Number(data[p].hindu)
                religion = "hindu"
            }
            if(Number(data[p].jewish) > temp)
            {
                temp = Number(data[p].jewish)
                religion = "jewish"
            }
            if(Number(data[p].folk) > temp)
            {
                temp = Number(data[p].folk)
                religion = "folk"
            }
            if(Number(data[p].other) > temp)
            {
                temp = Number(data[p].other)
                religion = "other"
            }
            if(Number(data[p].buddhist) > temp)
            {
                temp = Number(data[p].buddhist)
                religion = "buddhist"
            }
            dataset[getcountrycode(data[p].land)] = {fillKey: religion, percentage: temp}
        }
        console.log(dataset);
        d3.select("svg").remove()
    var map = new Datamap({
        // in container
        element: document.getElementById('containermap'),
        fills: {
            "unaf": "#e41a1c",
            "jewish": "#377eb8",
            "hindu": "#4daf4a",
            "christians": "#ff7f00",
            "muslim": "#984ea3",
            "other": "#ffff33",
            "folk": "#a65628",
            "buddhist": "#f781bf", 
            
        },
        data: dataset,
        geographyConfig: {
        popupTemplate: function(geography, dataset){
            return '<div class="hoverinfo">' + geography.properties.name + ": " + "religion: " + dataset.fillKey}
        },

    });
    d3.select(".datamaps-legend").remove()
    map.legend()
    map.svg.selectAll('.datamaps-subunit').on('click', function(geography, data) {
    console.log(geography.properties.name);
    makepie(geography.properties.name);
    })
    })
}