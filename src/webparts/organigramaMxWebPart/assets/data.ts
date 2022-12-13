const employees = [
  {
    id: 0,
    parentId: "",
    name: "",
    department: "",
    positionName: "",
    imageName: "logo-braskem"
, globalDepartment: ""  },
  {
    id: 1,
    parentId: 0,
    name: "CAROLINA DO VALLE TAVARES",
    department: "REGULATORY LEGAL",
    positionName: "GERENTE JURÍDICO REGULATÓRIO",
    imageName: 41502
, globalDepartment: ""  },
  {
    id: 2,
    parentId: 4,
    name: "LUIS FERNANDO FRAIRE CISNEROS",
    department: "BI TECHNICHAL SERVICES AND PRODUCT DEV",
    positionName: "INGENIERO SERVICIO TECNICO Y DESARROLLO JUNIOR",
    imageName: 34643
, globalDepartment: ""  },
  {
    id: 3,
    parentId: 14,
    name: "RAFAEL JAVIER LOPEZ MARMOLEJO",
    department: "BUSINESS SOLUTION & PROJECTS",
    positionName: "ANALISTA PROYECTOS SENIOR",
    imageName: 34011
, globalDepartment: ""  },
  {
    id: 4,
    parentId: 0,
    name: "ERIKA ANDREA RIVERA PAZ",
    department: "BI TECHNICHAL SERVICES AND PRODUCT DEV",
    positionName: "COORDINADOR SERVICIO TECNICO Y DESARROLLO",
    imageName: 34143
, globalDepartment: ""  },
  {
    id: 5,
    parentId: 14,
    name: "JOSE RAMIRO RODRIGUEZ PALAFOX",
    department: "BUSINESS SOLUTION & PROJECTS",
    positionName: "ANALISTA SOLUCIONES DE NEGOCIO JUNIOR",
    imageName: 34516
, globalDepartment: ""  },
  {
    id: 6,
    parentId: 169,
    name: "RICARDO MORENO TAPIA",
    department: "DISTRIBUTION AND EXPORTS",
    positionName: "ANALISTA COMERCIAL JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 7,
    parentId: 694,
    name: "ISRAEL GONZALEZ COSSIO",
    department: "BI PAYABLE ACCOUNTS",
    positionName: "COORDINADOR CUENTAS POR PAGAR",
    imageName: 34330
, globalDepartment: ""  },
  {
    id: 8,
    parentId: 505,
    name: "JOSE EDUARDO GRANADOS SANCHEZ",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 9,
    parentId: 78,
    name: "JIMMY GONZALEZ TORRES",
    department: "BI ETHYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 10,
    parentId: 330,
    name: "JOSE EMMANUEL ELIAS GUZMAN",
    department: "BI PRODUCTION NORTH SERVICES VI",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 11,
    parentId: 7,
    name: "DANIEL GUTIERREZ CASTELLANOS",
    department: "BI PAYABLE ACCOUNTS",
    positionName: "ANALISTA CUENTAS POR PAGAR PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 12,
    parentId: 487,
    name: "ADRIANA SARAI RAMIREZ VILLANUEVA",
    department: "IMPORTS AND SUPPLY",
    positionName: "ANALISTA PROCURA Y SUMINISTRO PLENO",
    imageName: 33981
, globalDepartment: ""  },
  {
    id: 13,
    parentId: 227,
    name: "LUIS ANTONIO ALVAREZ CRUZ",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR II",
    imageName: 33042
, globalDepartment: ""  },
  {
    id: 14,
    parentId: 180,
    name: "LLUVIA AZUCENA CHAVEZ NAVARRO",
    department: "BUSINESS SOLUTION & PROJECTS",
    positionName: "COORDINADOR PROYECTOS TI",
    imageName: 33420
, globalDepartment: ""  },
  {
    id: 15,
    parentId: 675,
    name: "ARLETT REYES VIDAL",
    department: "AUTOMATION MEXICO",
    positionName: "INGENIERO AUTOMATIZACION JUNIOR",
    imageName: 40664
, globalDepartment: ""  },
  {
    id: 16,
    parentId: 222,
    name: "RICARDO DE JESUS OROPEZA ZETINA",
    department: "BI LDPE PRODUCTION III",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 17,
    parentId: 157,
    name: "EMMANUEL ALANIS RAMON",
    department: "MATERIALS",
    positionName: "ANALISTA PROCURA Y SUMINISTRO PLENO",
    imageName: 32978
, globalDepartment: ""  },
  {
    id: 18,
    parentId: 342,
    name: "ARANTXA PASCUAL ESCALANTE",
    department: "BI POLYETHYLENTE OPERATIONS",
    positionName: "ASISTENTE EJECUTIVA",
    imageName: 33756
, globalDepartment: ""  },
  {
    id: 19,
    parentId: 299,
    name: "RODIBEL DOMINGUEZ HERNANDEZ",
    department: "BI ETHYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 20,
    parentId: 499,
    name: "JOSE MARTINEZ CASTILLEJOS",
    department: "EMERGENCIES",
    positionName: "TECNICO CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 21,
    parentId: 279,
    name: "VICTOR MANUEL ALTAMIRANO MANUEL",
    department: "ANALYTICAL AUTOMATION",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 22,
    parentId: 292,
    name: "LUIS ENRIQUE CASANGO MERAZ",
    department: "BI ETHYLENE MAINTENANCE IV",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 23,
    parentId: 487,
    name: "JESSICA ACOSTA CASTANEIRA",
    department: "IMPORTS AND SUPPLY",
    positionName: "ANALISTA DESARROLLO DE PROVEEDORES PLENO",
    imageName: 32131
, globalDepartment: ""  },
  {
    id: 24,
    parentId: 325,
    name: "ROSA JANINE ORTEGA LOPEZ",
    department: "BI PRODUCTION PLANNING",
    positionName: "ANALISTA PLANEACION PRODUCCION PLENO",
    imageName: 31495
, globalDepartment: ""  },
  {
    id: 25,
    parentId: 500,
    name: "MARTIN MARTINEZ LUIS",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "INGENIERO DE PROYECTOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 26,
    parentId: 140,
    name: "IGNACIO FIGUEROA SILVA",
    department: "BI P&O PEOPLE SERVICES",
    positionName: "ANALISTA SERVICIOS A PERSONAS PLENO",
    imageName: 31343
, globalDepartment: ""  },
  {
    id: 27,
    parentId: 236,
    name: "EDUARDO ANTONIO BLAS",
    department: "BI PRODUCTION NORTH SERVICES VI",
    positionName: "OPERADOR III",
    imageName: 31214
, globalDepartment: ""  },
  {
    id: 28,
    parentId: 63,
    name: "JUAN RAMON LEON PINEDA",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 29,
    parentId: 55,
    name: "ALONSO DE JESUS GARCIA DOMINGUEZ",
    department: "MATERIALS, SERVICES AND CONTRACTS",
    positionName: "ANALISTA PROCURA Y SUMINISTRO PLENO",
    imageName: 31354
, globalDepartment: ""  },
  {
    id: 30,
    parentId: 508,
    name: "ABRIL ESMERALDA NIETO VASCONCELOS",
    department: "QUALITY MEXICO",
    positionName: "INGENIERO CALIDAD PLENO",
    imageName: 30295
, globalDepartment: ""  },
  {
    id: 31,
    parentId: 678,
    name: "JAIR ROGELIO GOMEZ VARGAS",
    department: "BI LDPE PRODUCTION III",
    positionName: "OPERADOR III",
    imageName: 30301
, globalDepartment: ""  },
  {
    id: 32,
    parentId: 667,
    name: "ZELMA MORALES PEREZ",
    department: "BI SOCIAL RESPONSIBILITY",
    positionName: "ANALISTA RESPONSABILIDAD SOCIAL PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 33,
    parentId: 63,
    name: "JOSE ALBERTO UTRERA ENRIQUEZ",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "OPERADOR III",
    imageName: 29745
, globalDepartment: ""  },
  {
    id: 34,
    parentId: 677,
    name: "VICTOR MIGUEL MERICHE IZQUIERDO",
    department: "BI MAINTENANCE SOUTH SERVICES IV",
    positionName: "SUPERVISOR INSTRUMENTISTA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 35,
    parentId: 677,
    name: "IVAN RAUL PEREZ GONZALEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "SUPERVISOR MECANICO",
    imageName: 30306
, globalDepartment: ""  },
  {
    id: 36,
    parentId: 0,
    name: "JACQUELIN FUENTES GALMICHE",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO PLANEACION JUNIOR",
    imageName: 30917
, globalDepartment: ""  },
  {
    id: 37,
    parentId: 682,
    name: "YORDAN NADAV WERTMAN",
    department: "PEOPLE & ORGANIZATION",
    positionName: "DIRECTOR CORPORATIVO",
    imageName: 30919
, globalDepartment: ""  },
  {
    id: 38,
    parentId: 484,
    name: "MOISES DE LA CRUZ SANCHEZ",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR IV",
    imageName: 29891
, globalDepartment: ""  },
  {
    id: 39,
    parentId: 624,
    name: "SAUL MARQUEZ PRUDENCIO",
    department: "SERVICES AND CONTRACTS",
    positionName: "ANALISTA CONTRATOS Y SERVICIOS SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 40,
    parentId: 413,
    name: "RAFAEL ALONSO RIOS",
    department: "BI ACCOUNTING II",
    positionName: "COORDINADOR CONTABILIDAD",
    imageName: 31443
, globalDepartment: ""  },
  {
    id: 41,
    parentId: 169,
    name: "VICTOR KARIM RAJME LOPEZ",
    department: "DISTRIBUTION AND EXPORTS",
    positionName: "COORDINADOR POLIPROPILENO",
    imageName: 29633
, globalDepartment: ""  },
  {
    id: 42,
    parentId: 642,
    name: "BEATRIZ DENISSE BARRON OROZCO",
    department: "BI CUSTOMER SERVICES IM",
    positionName: "ANALISTA SERVICIO AL CLIENTE MI JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 43,
    parentId: 225,
    name: "ADRIAN MEJIA MEDINA",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "ANALISTA LOGISTICA PLENO",
    imageName: 32821
, globalDepartment: ""  },
  {
    id: 44,
    parentId: 536,
    name: "JOSE DAVID ROMERO ZAMORA",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 45,
    parentId: 474,
    name: "JORGE ENRIQUE GOMEZ ZARATE",
    department: "BI ETHYLENE PRODUCTION",
    positionName: "INGENIERO PRODUCCION SENIOR",
    imageName: 26022
, globalDepartment: ""  },
  {
    id: 46,
    parentId: 404,
    name: "LORENZO RAFAEL MOLINA VELAZQUEZ",
    department: "BI HDPE PRODUCTION VIII",
    positionName: "OPERADOR IV",
    imageName: 26418
, globalDepartment: ""  },
  {
    id: 47,
    parentId: 409,
    name: "RICARDO OROPEZA VASQUEZ",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 48,
    parentId: 227,
    name: "MILTON FRANCO MARTINEZ",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 49,
    parentId: 474,
    name: "RAFAEL BERNAL CANO",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 50,
    parentId: 505,
    name: "ALEJANDRO RAMIREZ CASTRO",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 51,
    parentId: 236,
    name: "LUIS ORTEGA ORTIZ",
    department: "BI PRODUCTION NORTH SERVICES VI",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 52,
    parentId: 474,
    name: "ARTURO EDUARDO GOMEZ VAZQUEZ",
    department: "BI ETHYLENE PRODUCTION I",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 26925
, globalDepartment: ""  },
  {
    id: 53,
    parentId: 313,
    name: "PASCUAL SANCHEZ CIRILO",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 54,
    parentId: 227,
    name: "MATIEL ALEJANDRO BARUCH HERNANDEZ",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 55,
    parentId: 586,
    name: "HUGO RENE FLORES REYES",
    department: "MATERIALS, SERVICES AND CONTRACTS",
    positionName: "COORDINADOR CONTRATOS Y SERVICIOS",
    imageName: 26100
, globalDepartment: ""  },
  {
    id: 56,
    parentId: 673,
    name: "JESUS IGNACIO DIAZ HERRERA",
    department: "BI IMPORTED ETHANE OPERATION",
    positionName: "COORDINADOR DE OPERACION ETANO IMPORTADO",
    imageName: 26309
, globalDepartment: ""  },
  {
    id: 57,
    parentId: 37,
    name: "FRANCISCO JAVIER PEREZ QUIJANO",
    department: "BI P&O COATZACOALCOS",
    positionName: "GERENTE P&O",
    imageName: 28359
, globalDepartment: ""  },
  {
    id: 58,
    parentId: 56,
    name: "LINO GUTIERREZ JUAREZ",
    department: "BI IMPORTED ETHANE OPERATION",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 59,
    parentId: 546,
    name: "LUZ DEL CARMEN LOPEZ ELORZA",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: 26954
, globalDepartment: ""  },
  {
    id: 60,
    parentId: 418,
    name: "MARIBEL REYES LARA",
    department: "BI HEALTH, ENVIRONMENT AND SAFETY",
    positionName: "ENFERMERA",
    imageName: 28714
, globalDepartment: ""  },
  {
    id: 61,
    parentId: 670,
    name: "JAVIER HERNANDEZ REYES",
    department: "BI LDPE PRODUCTION",
    positionName: "INGENIERO DE EFECTIVIDAD OPERACIONAL",
    imageName: 26491
, globalDepartment: ""  },
  {
    id: 62,
    parentId: 313,
    name: "CRESCENCIO JIMENEZ GARCIA",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 63,
    parentId: 313,
    name: "EZEQUIEL ACOSTA SALAYA",
    department: "BI PRODUCTION SOUTH SERVICES IV",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 64,
    parentId: 505,
    name: "FREDDY PEREZ ARREOLA",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: 26980
, globalDepartment: ""  },
  {
    id: 65,
    parentId: 675,
    name: "MODESTO MONTEJO PITALUA",
    department: "AUTOMATION MEXICO",
    positionName: "SUPERINTENDENTE AUTOMATIZACION",
    imageName: 26499
, globalDepartment: ""  },
  {
    id: 66,
    parentId: 505,
    name: "BAUDEL GOMEZ RODRIGUEZ",
    department: "RELIABILITY",
    positionName: "INGENIERO MECANICO ESPECIALISTA",
    imageName: 26219
, globalDepartment: ""  },
  {
    id: 67,
    parentId: 0,
    name: "PABLO ARTURO ORDONEZ ORIGEL",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO PLANEACION PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 68,
    parentId: 236,
    name: "HECTOR ALVAREZ RAMON",
    department: "BI PRODUCTION NORTH SERVICES II",
    positionName: "OPERADOR III",
    imageName: 26398
, globalDepartment: ""  },
  {
    id: 69,
    parentId: 692,
    name: "ALEJANDRO CASTELLANOS SANTOS",
    department: "BI COMMERCIAL - PE RIGID",
    positionName: "GERENTE DE VENTAS",
    imageName: 28598
, globalDepartment: ""  },
  {
    id: 70,
    parentId: 148,
    name: "LUIS ENRIQUE CRUZ NOLASCO",
    department: "BI MAINTENANCE SOUTH SERVICES III",
    positionName: "SUPERVISOR MECANICO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 71,
    parentId: 78,
    name: "ROGELIO GONZALEZ ZUNIGA",
    department: "BI ETHYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: 26244
, globalDepartment: ""  },
  {
    id: 72,
    parentId: 505,
    name: "RAFAEL ALFONZO PAVON",
    department: "RELIABILITY",
    positionName: "INGENIERO CONFIABILIDAD PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 73,
    parentId: 671,
    name: "JULIAN TORRES GONZALEZ",
    department: "LABORATORY I",
    positionName: "TECNICO LABORATORISTA JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 74,
    parentId: 508,
    name: "IGNACIO EVERARDO MARTINEZ FERRETIZ",
    department: "QUALITY MEXICO",
    positionName: "INGENIERO CALIDAD SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 75,
    parentId: 581,
    name: "MISAEL LARA ROBLES",
    department: "BI HDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 76,
    parentId: 259,
    name: "ANGEL MANUEL CARRILLO DIAZ",
    department: "BI HDPE PRODUCTION III",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 77,
    parentId: 495,
    name: "KAREN LOPEZ CABRERA",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA PLENO",
    imageName: 28807
, globalDepartment: ""  },
  {
    id: 78,
    parentId: 148,
    name: "GERSON LOPEZ VELAZQUEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE IV",
    positionName: "SUPERVISOR MECANICO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 79,
    parentId: 960,
    name: "JORGE LUIS CELAYA JIMENEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE",
    positionName: "INGENIERO MANTENIMIENTO PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 80,
    parentId: 505,
    name: "ANTONIO GODINEZ ZARATE",
    department: "RELIABILITY",
    positionName: "INGENIERO ESTATICO ESPECIALISTA",
    imageName: 24417
, globalDepartment: ""  },
  {
    id: 81,
    parentId: 0,
    name: "RODULFO ANTONIO ESCUDERO GAMERO",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO EFECTIVIDAD OPERACIONAL",
    imageName: 25742
, globalDepartment: ""  },
  {
    id: 82,
    parentId: 581,
    name: "EUSEBIO MORENO ARBOLE",
    department: "BI HDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: 25745
, globalDepartment: ""  },
  {
    id: 83,
    parentId: 416,
    name: "DELIA BAUTISTA RIVERA",
    department: "BI TAX I",
    positionName: "COORDINADOR FISCAL",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 84,
    parentId: 284,
    name: "PATRICIA BAZAN CASTANEDA",
    department: "BI CUSTOMER SERVICES EM",
    positionName: "ANALISTA SERVICIO AL CLIENTE ME PLENO",
    imageName: 22726
, globalDepartment: ""  },
  {
    id: 85,
    parentId: 352,
    name: "JORGE ALBERTO VERA PEREZ",
    department: "AUTOMATION MEXICO",
    positionName: "INGENIERO AUTOMATIZACION PLENO",
    imageName: 34654
, globalDepartment: ""  },
  {
    id: 86,
    parentId: 116,
    name: "JOSE JAVIER PEDRAZA CAPETILLO",
    department: "COMPLIANCE MEXICO",
    positionName: "ANALISTA COMPLIANCE SENIOR",
    imageName: 34838
, globalDepartment: ""  },
  {
    id: 87,
    parentId: 332,
    name: "ANNEL LEILANI VAZQUEZ VAZQUEZ",
    department: "BI TECHNICHAL LABORATORY",
    positionName: "INGENIERO LABORATORIO JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 88,
    parentId: 4,
    name: "ERIK COLL SEEDORF",
    department: "BI TECHNICHAL SERVICES AND PRODUCT DEV",
    positionName: "INGENIERO SERVICIO TECNICO Y DESARROLLO JUNIOR",
    imageName: 34037
, globalDepartment: ""  },
  {
    id: 89,
    parentId: 402,
    name: "CESAR PINEDA GONZALEZ",
    department: "BI MAINTENANCE SOUTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 90,
    parentId: 277,
    name: "ALFREDO BALCAZAR AGUERO",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 91,
    parentId: 546,
    name: "JORGE GALLEGOS ESCOBAR",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: 33972
, globalDepartment: ""  },
  {
    id: 92,
    parentId: 125,
    name: "LUIS ALFONSO MATEOS SANTIAGO",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE IV",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: 33709
, globalDepartment: ""  },
  {
    id: 93,
    parentId: 350,
    name: "CARLOS ALBERTO ESTEVES ELIZALDE",
    department: "BI COLLECTION",
    positionName: "ANALISTA COBRANZA JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 94,
    parentId: 167,
    name: "AURIA MARISOL FLORES PALACIOS",
    department: "BI PROCESSES",
    positionName: "ANALISTA PROCESOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 95,
    parentId: 164,
    name: "JOSE AGUILAR HERNANDEZ",
    department: "PRODUCT AND MARKET INTELIGENCE",
    positionName: "ANALISTA DE PRODUCTO SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 96,
    parentId: 696,
    name: "LUIS JAVIER SALINAS AGUILAR",
    department: "PRODUCT AND MARKET INTELIGENCE",
    positionName: "COORDINADOR PCR",
    imageName: 30789
, globalDepartment: ""  },
  {
    id: 97,
    parentId: 484,
    name: "VICTOR ALFONSO REYES CORTES",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 98,
    parentId: 163,
    name: "JHENNIFER JHOSSELIN ECHEVERRIA LARA",
    department: "BI INDUSTRIAL PERFORMANCE MANAGEMENT",
    positionName: "ANALISTA DESEMPEÑO INDUSTRIAL SENIOR",
    imageName: 30349
, globalDepartment: ""  },
  {
    id: 99,
    parentId: 505,
    name: "NANCY FABIOLA ROBLES CANDELARIO",
    department: "RELIABILITY",
    positionName: "INGENIERO CONFIABILIDAD PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 100,
    parentId: 319,
    name: "HECTOR GARCIA PERAZA",
    department: "RAW MATERIAIS AND SUPPLY",
    positionName: "ANALISTA PROCURA Y SUMINISTRO SENIOR",
    imageName: 32221
, globalDepartment: ""  },
  {
    id: 101,
    parentId: 562,
    name: "ASAEL CHAVEZ PUCHETA",
    department: "BI HDPE PRODUCTION VI",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 102,
    parentId: 140,
    name: "JUAN BERZAIN BARUCH MENDOZA",
    department: "BI P&O PEOPLE SERVICES",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 103,
    parentId: 481,
    name: "LUIS ANTONIO ACUNA SANCHEZ",
    department: "BI TRANSPORTATION MANAGEMENT",
    positionName: "COORDINADOR GESTION DE TRANSPORTES",
    imageName: 31003
, globalDepartment: ""  },
  {
    id: 104,
    parentId: 55,
    name: "OSVALDO FEDERICO AGUILAR TREJO",
    department: "MATERIALS, SERVICES AND CONTRACTS",
    positionName: "ANALISTA CONTRATOS Y SERVICIOS SENIOR",
    imageName: 31972
, globalDepartment: ""  },
  {
    id: 105,
    parentId: 125,
    name: "UZI JASIN DOMINGUEZ HERNANDEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE IV",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 106,
    parentId: 499,
    name: "CARLOS MARGARITO DE JESUS VAZQUEZ",
    department: "EMERGENCIES",
    positionName: "TECNICO CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 107,
    parentId: 259,
    name: "EDUARDO BERMUDEZ FELIPE",
    department: "BI HDPE PRODUCTION VI",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 108,
    parentId: 389,
    name: "VICTOR RICARDO REYES GONZALEZ",
    department: "BI INDUSTRIAL SAFETY",
    positionName: "INGENIERO SEGURIDAD INDUSTRIAL JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 109,
    parentId: 409,
    name: "ESTANISLAO VALENTIN GARCIA RAMOS",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 110,
    parentId: 499,
    name: "HUGO DAVID GARCIA CONTRERAS",
    department: "EMERGENCIES",
    positionName: "TECNICO CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 111,
    parentId: 351,
    name: "LUIS ALBERTO GARDUNO PRIMAVERA",
    department: "BI CONTROLLING & RISKS",
    positionName: "ESPECIALISTA DE CONTRALORIA",
    imageName: 30877
, globalDepartment: ""  },
  {
    id: 112,
    parentId: 261,
    name: "KELVIN JOSHUA BAUTISTA BOUREL",
    department: "BI LDPE PRODUCTION III",
    positionName: "OPERADOR III",
    imageName: 30299
, globalDepartment: ""  },
  {
    id: 113,
    parentId: 284,
    name: "ANA LAURA VALDEZ SALGADO",
    department: "BI CUSTOMER SERVICES EM",
    positionName: "ANALISTA SERVICIO AL CLIENTE ME PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 114,
    parentId: 642,
    name: "MARIA TERESA MONDRAGON VELAZQUEZ",
    department: "BI CUSTOMER SERVICES IM",
    positionName: "ANALISTA SERVICIO AL CLIENTE MI PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 115,
    parentId: 678,
    name: "LUIS DAVID SANTIAGO MORALES",
    department: "BI LDPE PRODUCTION III",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 116,
    parentId: 0,
    name: "AKIRA ANO JUNIOR",
    department: "COMPLIANCE MEXICO",
    positionName: "GERENTE COMPLIANCE",
    imageName: 42182
, globalDepartment: ""  },
  {
    id: 117,
    parentId: 0,
    name: "ANA GRACIELA BERNAL ANGELES",
    department: "BI COMPENSATION AND BENEFITS I",
    positionName: "ANALISTA REMUNERACION Y BENEFICIOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 118,
    parentId: 666,
    name: "SENEIDY LUCY LUIS ZUNIGA",
    department: "BI MAINTENANCE",
    positionName: "ASISTENTE EJECUTIVA",
    imageName: 32436
, globalDepartment: ""  },
  {
    id: 119,
    parentId: 495,
    name: "UZIEL GIRON MARCIAL",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA PLENO",
    imageName: 32780
, globalDepartment: ""  },
  {
    id: 120,
    parentId: 546,
    name: "NOE TOLENTINO LOPEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 121,
    parentId: 670,
    name: "GERARDO MORALES CHINAS",
    department: "BI LDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: 26419
, globalDepartment: ""  },
  {
    id: 122,
    parentId: 562,
    name: "JUAN ALBERTO GARCIA PERERA",
    department: "BI HDPE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: 26920
, globalDepartment: ""  },
  {
    id: 123,
    parentId: 56,
    name: "DAVID GALLEGOS DIAZ",
    department: "BI IMPORTED ETHANE OPERATION",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 124,
    parentId: 670,
    name: "JESUS ANTONIO HERNANDEZ",
    department: "BI LDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: 26878
, globalDepartment: ""  },
  {
    id: 125,
    parentId: 582,
    name: "ISIDRO OLIVARES FERNANDEZ",
    department: "BI ETHYLENE MAINTENANCE I",
    positionName: "SUPERVISOR INSTRUMENTISTA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 126,
    parentId: 244,
    name: "RODRIGO OROZCO HERNANDEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 127,
    parentId: 499,
    name: "GABRIEL GUILLEN GALMICH",
    department: "EMERGENCIES",
    positionName: "TECNICO CONTRA INCENDIO",
    imageName: 26928
, globalDepartment: ""  },
  {
    id: 128,
    parentId: 465,
    name: "YARIT AULI GONZALEZ",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 129,
    parentId: 389,
    name: "HERMILO REYES MOY",
    department: "BI INDUSTRIAL SAFETY",
    positionName: "INGENIERO SEGURIDAD INDUSTRIAL PLENO",
    imageName: 27586
, globalDepartment: ""  },
  {
    id: 130,
    parentId: 666,
    name: "DELIA SARAHI LEON SOLIS",
    department: "BI MAINTENANCE",
    positionName: "COORDINADOR DE PAROS",
    imageName: 27983
, globalDepartment: ""  },
  {
    id: 131,
    parentId: 261,
    name: "ADOLFO CANDELARIA CERVANTES",
    department: "BI LDPE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: 26894
, globalDepartment: ""  },
  {
    id: 132,
    parentId: 156,
    name: "CARLOS HUMBERTO GARCIA IBARRA",
    department: "PROCESS ENGINEERING",
    positionName: "INGENIERO PROCESOS ESPECIALISTA",
    imageName: 26081
, globalDepartment: ""  },
  {
    id: 133,
    parentId: 222,
    name: "JORGE LUIS VICENTE LOPEZ",
    department: "BI LDPE PRODUCTION I",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 134,
    parentId: 345,
    name: "DAMIAN HERNANDEZ CANDELARIO",
    department: "LABORATORIES-I",
    positionName: "INGENIERO LABORATORIO SENIOR",
    imageName: 26646
, globalDepartment: ""  },
  {
    id: 135,
    parentId: 352,
    name: "EDWIN JARQUIN URBINA",
    department: "AUTOMATION MEXICO",
    positionName: "INGENIERO AUTOMATIZACION PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 136,
    parentId: 78,
    name: "JESUS JIMENEZ ORTIZ",
    department: "BI ETHYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 137,
    parentId: 484,
    name: "MIGUEL ANGEL VINA HERNANDEZ",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR IV",
    imageName: 27053
, globalDepartment: ""  },
  {
    id: 138,
    parentId: 7,
    name: "ALEJANDRA MONSERRAT RUIZ PERALTA",
    department: "BI PAYABLE ACCOUNTS",
    positionName: "ANALISTA CUENTAS POR COBRAR PLENO",
    imageName: 26101
, globalDepartment: ""  },
  {
    id: 139,
    parentId: 484,
    name: "JOSE DOMINGO LOPEZ RAMOS",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 140,
    parentId: 57,
    name: "YESSICA HERNANDEZ MORALES",
    department: "BI P&O PEOPLE SERVICES",
    positionName: "COORDINADOR SERVICIOS A PERSONAS",
    imageName: 25857
, globalDepartment: ""  },
  {
    id: 141,
    parentId: 648,
    name: "CESAR HERNANDEZ GOMEZ",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 142,
    parentId: 581,
    name: "ROBERTO NEPOMUCENO RIBOT",
    department: "BI HDPE PRODUCTION VII",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 143,
    parentId: 227,
    name: "JUAN JOSE JIMENEZ ALVAREZ",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 144,
    parentId: 148,
    name: "PAULINO EUSTACIO CARRERA RICO",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE I",
    positionName: "SUPERVISOR ELECTRICO",
    imageName: 26218
, globalDepartment: ""  },
  {
    id: 145,
    parentId: 474,
    name: "CRISTIAN CEBRERO CASTANEDA",
    department: "BI ETHYLENE PRODUCTION",
    positionName: "INGENIERO PRODUCCION PLENO",
    imageName: 26372
, globalDepartment: ""  },
  {
    id: 146,
    parentId: 170,
    name: "JORGE ALFONSO GARCIA MASCARENAS",
    department: "BI PRODUCTION AND SERVICES",
    positionName: "GERENTE PRODUCCION",
    imageName: 28561
, globalDepartment: ""  },
  {
    id: 147,
    parentId: 505,
    name: "SANTIAGO PEREZ RAMIREZ",
    department: "RELIABILITY",
    positionName: "INGENIERO CONFIABILIDAD SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 148,
    parentId: 666,
    name: "MIGUEL ANTONIO CALACICH GARCIA",
    department: "BI ETHYLENE MAINTENANCE",
    positionName: "SUPERINTENDENTE MANTENIMIENTO",
    imageName: 26515
, globalDepartment: ""  },
  {
    id: 149,
    parentId: 157,
    name: "SULVE LIZETH CONDE LAZCANO",
    department: "MATERIALS",
    positionName: "ANALISTA PROCURA Y SUMINISTRO PLENO",
    imageName: 28588
, globalDepartment: ""  },
  {
    id: 150,
    parentId: 474,
    name: "VICENTE ALOR LUNA",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 26397
, globalDepartment: ""  },
  {
    id: 151,
    parentId: 562,
    name: "EDDY JOSUE CALDERON VAZQUEZ",
    department: "BI HDPE PRODUCTION III",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 152,
    parentId: 581,
    name: "ROBERTO CANSECO USCANGA",
    department: "BI HDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 153,
    parentId: 412,
    name: "LUIS ALBERTO SANCHEZ LEYVA",
    department: "BI MAINTENANCE NORTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 154,
    parentId: 203,
    name: "FILIPE ALVES TAVARES",
    department: "LEGAL & CORPORATE GOVERNANCE",
    positionName: "GERENTE LEGAL",
    imageName: 40918
, globalDepartment: ""  },
  {
    id: 155,
    parentId: 227,
    name: "CARLOS ARMANDO OROZCO SAVINON",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 156,
    parentId: 170,
    name: "JORGE LUIS CABRERA AMADOR",
    department: "PROCESS ENGINEERING",
    positionName: "SUPERINTENDENTE DE PROCESOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 157,
    parentId: 586,
    name: "LIZBETH FERNANDA HERNANDEZ GARCIA",
    department: "MATERIALS",
    positionName: "COORDINADOR PROCURA Y SUMINISTRO",
    imageName: 29090
, globalDepartment: ""  },
  {
    id: 158,
    parentId: 499,
    name: "ANTHONY LAZARO MUNOZ DAZA",
    department: "EMERGENCIES",
    positionName: "TECNICO CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 159,
    parentId: 481,
    name: "CINTHIA PATRICIA MELGAR AGUNDIS",
    department: "BI QUALITY",
    positionName: "ANALISTA CALIDAD PLENO",
    imageName: 29140
, globalDepartment: ""  },
  {
    id: 160,
    parentId: 222,
    name: "ADRIAN SANTOS AGUIRRE",
    department: "BI LDPE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 161,
    parentId: 148,
    name: "ROBERTO TRIANO MAGANA",
    department: "BI ETHYLENE MAINTENANCE III",
    positionName: "INGENIERO MANTENIMIENTO PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 162,
    parentId: 693,
    name: "JAVIER ALEJANDRO BERMUDEZ HERNANDEZ",
    department: "BI STRATEGIC RAW MATERIAL AND ENGERGY",
    positionName: "GERENTE INSUMOS ESTRATEGICOS Y ENERGIA",
    imageName: 23736
, globalDepartment: ""  },
  {
    id: 163,
    parentId: 689,
    name: "CLAUDIA PATRICIA CHINAS CULEBRO",
    department: "BI INDUSTRIAL PERFORMANCE MANAGEMENT",
    positionName: "COORDINADOR DESEMPEÑO INDUSTRIAL",
    imageName: 24977
, globalDepartment: ""  },
  {
    id: 164,
    parentId: 696,
    name: "ALAN ARTURO AVALOS OVIEDO",
    department: "PRODUCT",
    positionName: "COORDINADOR DE PRODUCTO",
    imageName: 24979
, globalDepartment: ""  },
  {
    id: 165,
    parentId: 225,
    name: "MIGUEL ANGEL ESQUIVEL GONZALEZ",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "ANALISTA LOGISTICA JUNIOR",
    imageName: 25287
, globalDepartment: ""  },
  {
    id: 166,
    parentId: 162,
    name: "URIEL MARTINEZ TORRES",
    department: "BI STRATEGIC RAW MATERIAL AND ENGERGY",
    positionName: "ESPECIALISTA ENERGIA II",
    imageName: 25780
, globalDepartment: ""  },
  {
    id: 167,
    parentId: 690,
    name: "ELSA CECILIA LOPEZ MEJIA",
    department: "BI CUSTOMER SERVICES",
    positionName: "GERENTE SERVICIO AL CLIENTE",
    imageName: 25539
, globalDepartment: ""  },
  {
    id: 168,
    parentId: 670,
    name: "JORGE ARTURO DOMINGUEZ TRONCOSO",
    department: "BI LDPE PRODUCTION",
    positionName: "INGENIERO PRODUCCION PLENO",
    imageName: 25639
, globalDepartment: ""  },
  {
    id: 169,
    parentId: 692,
    name: "FRANCISCO JORGE RIANCHO SANCHEZ",
    department: "DISTRIBUTION AND EXPORTS",
    positionName: "GERENTE VENTAS",
    imageName: 22723
, globalDepartment: ""  },
  {
    id: 170,
    parentId: 682,
    name: "ROBERTO VELASCO GUTIERREZ",
    department: "INDUSTRIAL MEXICO",
    positionName: "DIRECTOR INDUSTRIAL",
    imageName: 22727
, globalDepartment: ""  },
  {
    id: 171,
    parentId: 37,
    name: "JOSE EDER GARRIDO GAMBOA",
    department: "BI INTERNAL COMMUNICATION",
    positionName: "COORDINADOR COMUNICACION INTERNA",
    imageName: 22728
, globalDepartment: ""  },
  {
    id: 172,
    parentId: 505,
    name: "GUSTAVO ERNESTO GURIDI RAMOS",
    department: "RELIABILITY",
    positionName: "INGENIERO CONFIABILIDAD JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 173,
    parentId: 264,
    name: "KARINA RODRIGUEZ NESTOZO",
    department: "BI LABOR RELATIONSHIP",
    positionName: "ANALISTA EDUCACION INDUSTRIAL SENIOR",
    imageName: 34433
, globalDepartment: ""  },
  {
    id: 174,
    parentId: 261,
    name: "CHRISTIAN ALBERTO HERNANDEZ COBOS",
    department: "BI LDPE PRODUCTION IV",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 175,
    parentId: 227,
    name: "CESAR ARTURO DE LA CRUZ SANCHEZ",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 176,
    parentId: 284,
    name: "EDUARDO ROMERO SALAZAR",
    department: "BI CUSTOMER SERVICES EM",
    positionName: "ANALISTA SERVICIO AL CLIENTE ME JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 177,
    parentId: 276,
    name: "JORGE MIGUEL ROMAN SANCHEZ",
    department: "BI MAINTENANCE NORTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: 33970
, globalDepartment: ""  },
  {
    id: 178,
    parentId: 322,
    name: "NAHUM VILLEGAS LARA",
    department: "BI PRODUCTION NORTH SERVICES II",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 179,
    parentId: 541,
    name: "ROGELIO GONZALEZ SANCHEZ",
    department: "BI LOGISTIC CONTRACTS",
    positionName: "ANALISTA CONTRATOS LOGISTICOS PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 180,
    parentId: 0,
    name: "ROBERTO ENRIQUE ANGUIANO MORIN",
    department: "IT MEXICO LOCAL",
    positionName: "GERENTE TI",
    imageName: 33497
, globalDepartment: ""  },
  {
    id: 181,
    parentId: 690,
    name: "MIRNA FLORES DIAZ",
    department: "SUPPLY CHAIN MEXICO",
    positionName: "ASISTENTE EJECUTIVA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 182,
    parentId: 413,
    name: "GABRIELA GUEVARA SALAS",
    department: "BI ACCOUNTING III",
    positionName: "COORDINADOR CONTABILIDAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 183,
    parentId: 671,
    name: "TANIA GUADALUPE GARCIA TADEO",
    department: "LABORATORY I",
    positionName: "TECNICO LABORATORISTA JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 184,
    parentId: 404,
    name: "CRISOFORO ISLAS RAMIREZ",
    department: "BI HDPE PRODUCTION VIII",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 185,
    parentId: 389,
    name: "ALEJANDRO HERRERA UTRERA",
    department: "BI INDUSTRIAL SAFETY",
    positionName: "INGENIERO SEGURIDAD INDUSTRIAL PLENO",
    imageName: 29930
, globalDepartment: ""  },
  {
    id: 186,
    parentId: 140,
    name: "LADIS MARES SANCHEZ",
    department: "BI P&O PEOPLE SERVICES",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 187,
    parentId: 562,
    name: "IMBERT CHEVEZ RIOS",
    department: "BI HDPE PRODUCTION IX",
    positionName: "OPERADOR III",
    imageName: 31304
, globalDepartment: ""  },
  {
    id: 188,
    parentId: 474,
    name: "ROGER GONZALEZ SANTIAGO",
    department: "BI ETHYLENE PRODUCTION",
    positionName: "INGENIERO DE EFECTIVIDAD OPERACIONAL",
    imageName: 29794
, globalDepartment: ""  },
  {
    id: 189,
    parentId: 689,
    name: "GUILLERMINA ZAMORA LOYO",
    department: "BI COMMERCIAL PERFOR. MGNT & MKT INTEL",
    positionName: "COORDINADOR DESEMPEÑO COMERCIAL",
    imageName: 29995
, globalDepartment: ""  },
  {
    id: 190,
    parentId: 541,
    name: "OSCAR FERNANDO ENRIQUEZ NUNEZ",
    department: "BI LOGISTIC CONTRACTS",
    positionName: "ANALISTA CONTRATOS LOGISTICOS SENIOR",
    imageName: 30989
, globalDepartment: ""  },
  {
    id: 191,
    parentId: 960,
    name: "CARLOS ALBERTO CRUZ GALLEGOS",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO PLANEACION JUNIOR",
    imageName: 32130
, globalDepartment: ""  },
  {
    id: 192,
    parentId: 125,
    name: "PABLO TORRES MORALES",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: 30267
, globalDepartment: ""  },
  {
    id: 193,
    parentId: 499,
    name: "JONATAN RUIZ RENDON",
    department: "EMERGENCIES",
    positionName: "TECNICO CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 194,
    parentId: 351,
    name: "ANGEL JARAMILLO CRUZ",
    department: "BI CONTROLLING",
    positionName: "ANALISTA CONTRALORIA SENIOR",
    imageName: 31210
, globalDepartment: ""  },
  {
    id: 195,
    parentId: 63,
    name: "JESUS BERNARDO LINARES ROMERO",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR II",
    imageName: 32264
, globalDepartment: ""  },
  {
    id: 196,
    parentId: 325,
    name: "YULI MARIELA DIAZ ALTUZAR",
    department: "BI PRODUCTION PLANNING",
    positionName: "ANALISTA PLANEACION PRODUCCION JUNIOR",
    imageName: 30441
, globalDepartment: ""  },
  {
    id: 197,
    parentId: 322,
    name: "JONATHAN AMBROSIO CHICHINO",
    department: "BI PRODUCTION NORTH SERVICES II",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 198,
    parentId: 404,
    name: "JUAN TOMAS DOMINGUEZ CRUZ",
    department: "BI HDPE PRODUCTION IV",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 199,
    parentId: 332,
    name: "MARTHA SELENE TOBON MARTINEZ",
    department: "BI TECHNICHAL LABORATORY",
    positionName: "INGENIERO LABORATORIO PLENO",
    imageName: 32279
, globalDepartment: ""  },
  {
    id: 200,
    parentId: 676,
    name: "BRENDA HERNANDEZ PEREZ",
    department: "BI PEOPLE SERVICES",
    positionName: "COORDINADOR COMPENSACION Y BENEFICIOS",
    imageName: 32066
, globalDepartment: ""  },
  {
    id: 201,
    parentId: 4,
    name: "ITZEL DEL CARMEN ESCOBAR TOLEDO",
    department: "BI TECHNICHAL SERVICES AND PRODUCT DEV",
    positionName: "INGENIERO SERVICIO TECNICO Y DESARROLLO PLENO",
    imageName: 30249
, globalDepartment: ""  },
  {
    id: 202,
    parentId: 300,
    name: "JUAN JOSE CASTELLANOS VAZQUEZ",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 203,
    parentId: 682,
    name: "DIANA RODRIGUEZ TORRES",
    department: "LEGAL & CORPORATE GOVERNANCE",
    positionName: "DIRECTOR LEGAL",
    imageName: 31845
, globalDepartment: ""  },
  {
    id: 204,
    parentId: 692,
    name: "BRENDA LIZETTE LAGUNAS HERNANDEZ",
    department: "BI COMMERCIAL - PE FLEXIBLES",
    positionName: "GERENTE DE VENTAS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 205,
    parentId: 4,
    name: "LILIANA DANAE NIEVES RESENDIZ",
    department: "BI TECHNICHAL SERVICES AND PRODUCT DEV",
    positionName: "INGENIERO SERVICIO TECNICO Y DESARROLLO PLENO",
    imageName: 29889
, globalDepartment: ""  },
  {
    id: 206,
    parentId: 0,
    name: "ROGELIO CHAVEZ GUZMAN",
    department: "BI PROJECT FINANCE I",
    positionName: "ANALISTA PROJECT FINANCE SENIOR",
    imageName: 31271
, globalDepartment: ""  },
  {
    id: 207,
    parentId: 231,
    name: "NERY ISABEL ESPINOZA TOLEDO",
    department: "SERVICES AND CONTRACTS I",
    positionName: "ANALISTA CONTRATOS Y SERVICIOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 208,
    parentId: 693,
    name: "CESAR AUGUSTO RANGEL GARCIA",
    department: "BI EXTERNAL AFFAIRS CDMX",
    positionName: "ESPECIALISTA RELACIONES INSTITUCIONALES",
    imageName: 32812
, globalDepartment: ""  },
  {
    id: 209,
    parentId: 495,
    name: "ANGEL DAVID MARTINEZ PEREZ",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA JUNIOR",
    imageName: 40011
, globalDepartment: ""  },
  {
    id: 210,
    parentId: 70,
    name: "JOSUE BAUTISTA SANTOS",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 211,
    parentId: 409,
    name: "FELIPE RAMON MORENO",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 212,
    parentId: 227,
    name: "DAVID USCANGA SOSA",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 213,
    parentId: 298,
    name: "JOSE ANTONIO GARCIA SINTA",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 214,
    parentId: 223,
    name: "DANIEL CHAVEZ BOZAS",
    department: "BI PROCESS SAFETY",
    positionName: "COORDINADOR SEGURIDAD EN PROCESOS",
    imageName: 26028
, globalDepartment: ""  },
  {
    id: 215,
    parentId: 693,
    name: "SERGIO PLATA AZPILCUETA",
    department: "BI EXTERNAL AFFAIRS",
    positionName: "COORDINADOR RELACIONES INSTITUCIONALES",
    imageName: 26593
, globalDepartment: ""  },
  {
    id: 216,
    parentId: 352,
    name: "RAUL GALLEGOS CRUZ",
    department: "AUTOMATION MEXICO",
    positionName: "INGENIERO AUTOMATIZACION JUNIOR",
    imageName: 26917
, globalDepartment: ""  },
  {
    id: 217,
    parentId: 678,
    name: "CARLOS ALBERTO REYES OLIN",
    department: "BI LDPE PRODUCTION IV",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 218,
    parentId: 546,
    name: "JOSE MANUEL GUTIERREZ DOMINGUEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 219,
    parentId: 505,
    name: "HUGO OROPEZA RAMIREZ",
    department: "RELIABILITY",
    positionName: "INGENIERO ELECTRICO ESPECIALISTA",
    imageName: 27139
, globalDepartment: ""  },
  {
    id: 220,
    parentId: 150,
    name: "CARLOS ENRIQUE ROSAS HERNANDEZ",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR IV",
    imageName: 27004
, globalDepartment: ""  },
  {
    id: 221,
    parentId: 330,
    name: "EUSEBIO TORRES TORRES",
    department: "BI PRODUCTION NORTH SERVICES VI",
    positionName: "OPERADOR IV",
    imageName: 26443
, globalDepartment: ""  },
  {
    id: 222,
    parentId: 670,
    name: "LEONARDO DANIEL ZUNIGA AGUILAR",
    department: "BI LDPE PRODUCTION II",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 26449
, globalDepartment: ""  },
  {
    id: 223,
    parentId: 170,
    name: "MICHAEL CASTILLO LOPEZ",
    department: "BI HES",
    positionName: "GERENTE SSMA",
    imageName: 26098
, globalDepartment: ""  },
  {
    id: 224,
    parentId: 292,
    name: "JUAN DE JESUS IGNO",
    department: "BI ETHYLENE MAINTENANCE IV",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 225,
    parentId: 481,
    name: "ANTONIO QUEZADA GARCIA",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "COORDINADOR OPERADORES LOGISTICOS",
    imageName: 26111
, globalDepartment: ""  },
  {
    id: 226,
    parentId: 581,
    name: "SERGIO CRUZ MORALES",
    department: "BI HDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 227,
    parentId: 474,
    name: "HUGO LURIA GOMEZ",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 228,
    parentId: 495,
    name: "JOSE IGNACIO PEREZ HERNANDEZ",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA SENIOR",
    imageName: 28692
, globalDepartment: ""  },
  {
    id: 229,
    parentId: 418,
    name: "CHRISTIAN JANETH FLORES GOMEZ",
    department: "BI HEALTH, ENVIRONMENT AND SAFETY",
    positionName: "MEDICO",
    imageName: 28062
, globalDepartment: ""  },
  {
    id: 230,
    parentId: 551,
    name: "CELSO GARCIA AGUILAR",
    department: "BI HDPE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 231,
    parentId: 586,
    name: "JOSE ALEJANDRO AYALA LOPEZ",
    department: "SERVICES AND CONTRACTS I",
    positionName: "COORDINADOR CONTRATOS Y SERVICIOS",
    imageName: 25855
, globalDepartment: ""  },
  {
    id: 232,
    parentId: 83,
    name: "MARIA DE LOS ANGELES MARIN ANGUIANO",
    department: "BI TAX I",
    positionName: "ANALISTA IMPUESTOS SENIOR",
    imageName: 25859
, globalDepartment: ""  },
  {
    id: 233,
    parentId: 0,
    name: "LUIS IGNACIO MICHEL GARDUZA",
    department: "NAM EQUIPMENT EXCELLENCE AND RELIABILITY",
    positionName: "INGENIERO ESPECIALISTA DE CONFIABILIDAD",
    imageName: 26168
, globalDepartment: ""  },
  {
    id: 234,
    parentId: 479,
    name: "LEON ISAIAS RODRIGUEZ LUGO",
    department: "BI PRODUCTION NORTH SERVICES III",
    positionName: "INGENIERO DE EFECTIVIDAD OPERACIONAL",
    imageName: 26343
, globalDepartment: ""  },
  {
    id: 235,
    parentId: 0,
    name: "ROBERTO PEREZ ARCOS",
    department: "BI ACCOUNTING III",
    positionName: "ANALISTA CONTABLE SENIOR",
    imageName: 28097
, globalDepartment: ""  },
  {
    id: 236,
    parentId: 479,
    name: "JULIAN CORTES ROJAS",
    department: "BI PRODUCTION NORTH SERVICES IV",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 26353
, globalDepartment: ""  },
  {
    id: 237,
    parentId: 669,
    name: "JUAN JOSE PAREDES GOMEZ",
    department: "BI LDPE PRODUCTION IV",
    positionName: "OPERADOR IV",
    imageName: 26979
, globalDepartment: ""  },
  {
    id: 238,
    parentId: 413,
    name: "ALONSO FLORES CASTANEDA",
    department: "MONITORING I",
    positionName: "COORDINADOR MONITORIA",
    imageName: 28649
, globalDepartment: ""  },
  {
    id: 239,
    parentId: 69,
    name: "SERGIO HERACLIO TEUTLA MARTINEZ",
    department: "BI COMMERCIAL - PE RIGID",
    positionName: "GERENTE DE CUENTA IV",
    imageName: 26381
, globalDepartment: ""  },
  {
    id: 240,
    parentId: 322,
    name: "NICOLAS ALOR FRANCISCO",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 241,
    parentId: 0,
    name: "JAIME FLORES ALVAREZ",
    department: "GLOBAL UTILITIES & MX IMPORTS",
    positionName: "GERENTE MATERIA PRIMA Y SUMINISTROS",
    imageName: 27355
, globalDepartment: ""  },
  {
    id: 242,
    parentId: 505,
    name: "ROMAN ANTONIO CRUZ BURELOS",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: 26233
, globalDepartment: ""  },
  {
    id: 243,
    parentId: 35,
    name: "ROBERTO RODRIGUEZ TONCHE",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 244,
    parentId: 666,
    name: "JORGE EMMANUEL DOMINGUEZ TORRES",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE",
    positionName: "SUPERVISOR MANTENIMIENTO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 245,
    parentId: 52,
    name: "JORGE ENRIQUE MARIN DE DIOS",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 246,
    parentId: 225,
    name: "JESUS MAR ROBLES",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "ANALISTA LOGISTICA SENIOR",
    imageName: 29163
, globalDepartment: ""  },
  {
    id: 247,
    parentId: 325,
    name: "GRISELDA CHAVEZ SEGURA",
    department: "BI PRODUCTION PLANNING",
    positionName: "ANALISTA PLANEACION PRODUCCION SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 248,
    parentId: 259,
    name: "CHRISTIAN MEDINA ALONSO",
    department: "BI HDPE PRODUCTION III",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 249,
    parentId: 696,
    name: "JOHANA PAULINA VALENCIA BARRON",
    department: "PRODUCT AND MARKET INTELIGENCE",
    positionName: "COORDINADOR GESTION DE RECICLADORES",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 250,
    parentId: 332,
    name: "KEVIN HOYOS GOMEZ",
    department: "BI TECHNICHAL LABORATORY",
    positionName: "INGENIERO LABORATORIO PLENO",
    imageName: 28989
, globalDepartment: ""  },
  {
    id: 251,
    parentId: 499,
    name: "FRANCISCO JOSE LAGIER ARGUELLES",
    department: "EMERGENCIES",
    positionName: "TECNICO CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 252,
    parentId: 499,
    name: "OMAR ANTONIO SEGURA",
    department: "EMERGENCIES",
    positionName: "LIDER DE EMERGENCIAS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 253,
    parentId: 298,
    name: "ELDRIN GUTIERREZ ALVAREZ",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 254,
    parentId: 465,
    name: "CHRISTIAN VARGAS MOLINA",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 255,
    parentId: 671,
    name: "ARIEL VALENCIA PERLA",
    department: "LABORATORY I",
    positionName: "TECNICO LABORATORISTA SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 256,
    parentId: 499,
    name: "DAVID GORRA TERRONES",
    department: "EMERGENCIES",
    positionName: "LIDER CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 257,
    parentId: 214,
    name: "JULIO CESAR SOSA VASQUEZ",
    department: "BI PROCESS SAFETY",
    positionName: "INGENIERO SEGURIDAD DE PROCESOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 258,
    parentId: 696,
    name: "MIGUEL ANGEL BOETA ROSAS",
    department: "PRODUCT AND MARKET INTELIGENCE",
    positionName: "INGENIERO PCR SENIOR",
    imageName: 24871
, globalDepartment: ""  },
  {
    id: 259,
    parentId: 581,
    name: "HERIBERTO LUNA HERNANDEZ",
    department: "BI HDPE PRODUCTION III",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 25743
, globalDepartment: ""  },
  {
    id: 260,
    parentId: 670,
    name: "HECTOR SILVA CHAVEZ",
    department: "BI LDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: 25739
, globalDepartment: ""  },
  {
    id: 261,
    parentId: 670,
    name: "ANGEL BARAJAS MARTINEZ",
    department: "BI LDPE PRODUCTION I",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 25744
, globalDepartment: ""  },
  {
    id: 262,
    parentId: 7,
    name: "ALEJANDRO VELAZQUEZ BETANCOURT",
    department: "BI PAYABLE ACCOUNTS",
    positionName: "ANALISTA CUENTAS POR PAGAR PLENO",
    imageName: 24970
, globalDepartment: ""  },
  {
    id: 263,
    parentId: 693,
    name: "ARMANDO VERA HERNANDEZ",
    department: "BI EXTERNAL COMMUNICATION",
    positionName: "COORDINADOR COMUNICACION EXTERNA",
    imageName: 25783
, globalDepartment: ""  },
  {
    id: 264,
    parentId: 57,
    name: "GUSTAVO ALONSO GAMBOA FLORES",
    department: "BI LABOR RELATIONSHIP",
    positionName: "COORDINADOR RELACIONES LABORALES",
    imageName: 25102
, globalDepartment: ""  },
  {
    id: 265,
    parentId: 673,
    name: "DAVID GARCIA BARRADAS",
    department: "BI IMPORTED ETHANE OPERATION",
    positionName: "INGENIERO DE MEJORA SENIOR",
    imageName: 25100
, globalDepartment: ""  },
  {
    id: 266,
    parentId: 103,
    name: "EVELYN DANAE VILLEGAS CEPEDA",
    department: "BI TRANSPORTATION MANAGEMENT",
    positionName: "ANALISTA GESTION DE TRANSPORTES JUNIOR",
    imageName: 34026
, globalDepartment: ""  },
  {
    id: 267,
    parentId: 284,
    name: "LIZETH IVON ESTRADA VARGAS",
    department: "BI CUSTOMER SERVICES EM",
    positionName: "ANALISTA SERVICIO AL CLIENTE ME JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 268,
    parentId: 4,
    name: "SAUL OVANDO ESCOBAR",
    department: "BI TECHNICHAL SERVICES AND PRODUCT DEV",
    positionName: "INGENIERO SERVICIO TECNICO Y DESARROLLO JUNIOR",
    imageName: 34038
, globalDepartment: ""  },
  {
    id: 269,
    parentId: 244,
    name: "ROMAN DAVID NAVARRETE RODRIGUEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: 33968
, globalDepartment: ""  },
  {
    id: 270,
    parentId: 505,
    name: "ZURISADAI SANCHEZ CRUZ",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO III",
    imageName: 33691
, globalDepartment: ""  },
  {
    id: 271,
    parentId: 204,
    name: "ERNESTO POSADAS MENDEZ",
    department: "BI COMMERCIAL - PE FLEXIBLES",
    positionName: "GERENTE DE CUENTA III",
    imageName: 34576
, globalDepartment: ""  },
  {
    id: 272,
    parentId: 244,
    name: "ROBERTO ARIEL AMOR IZQUIERDO",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: 33976
, globalDepartment: ""  },
  {
    id: 273,
    parentId: 562,
    name: "YESENIA CARDENAS CARRERA",
    department: "BI HDPE PRODUCTION IX",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 274,
    parentId: 507,
    name: "GABRIEL ALEJANDRO MARCANO SALAZAR",
    department: "BI ORGANIZATIONAL DEVELOPMENT",
    positionName: "COORDINADOR DESARROLLO ORGANIZACIONAL",
    imageName: 34655
, globalDepartment: ""  },
  {
    id: 275,
    parentId: 34,
    name: "ANTONIO RODRIGUEZ MARTINEZ",
    department: "BI MAINTENANCE SOUTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 276,
    parentId: 475,
    name: "CARLOS ALBERTO AMEZCUA GUZMAN",
    department: "BI MAINTENANCE NORTH SERVICES I",
    positionName: "SUPERVISOR INSTRUMENTISTA",
    imageName: 30145
, globalDepartment: ""  },
  {
    id: 277,
    parentId: 677,
    name: "JOSUE YAIR NUNEZ SANCHEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE I",
    positionName: "SUPERVISOR MECANICO",
    imageName: 30353
, globalDepartment: ""  },
  {
    id: 278,
    parentId: 163,
    name: "MARIA VIRIDIANA CORDERO GARCIA",
    department: "BI INDUSTRIAL PERFORMANCE MANAGEMENT",
    positionName: "ANALISTA DESEMPEÑO INDUSTRIAL JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 279,
    parentId: 675,
    name: "KARINA FERIA MONTOYA",
    department: "ANALYTICAL AUTOMATION",
    positionName: "SUPERVISOR AUTOMATIZACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 280,
    parentId: 540,
    name: "SERGIO SURIANO RODRIGUEZ",
    department: "BI CORPORATE AND CONTRACT LAW",
    positionName: "ABOGADO",
    imageName: 32227
, globalDepartment: ""  },
  {
    id: 281,
    parentId: 569,
    name: "VICTOR ISRAEL MARTINEZ PEDROZA",
    department: "OPERATIONS IT MEXICO",
    positionName: "ANALISTA SOPORTE TECNICO JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 282,
    parentId: 264,
    name: "JULIA MARGARITA ROMERO MARTINEZ",
    department: "BI LABOR RELATIONSHIP",
    positionName: "ANALISTA RELACIONES LABORALES JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 283,
    parentId: 146,
    name: "ROSA ICELA OROZCO RAMIREZ",
    department: "BI PRODUCTION AND SERVICES",
    positionName: "ASISTENTE EJECUTIVA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 284,
    parentId: 167,
    name: "KARINA FABIOLA MENA ARROYO",
    department: "BI CUSTOMER SERVICES EM",
    positionName: "COORDINADOR SERVICIO AL CLIENTE ME",
    imageName: 29822
, globalDepartment: ""  },
  {
    id: 285,
    parentId: 562,
    name: "ADRIAN MORALES ESCOBAR",
    department: "BI HDPE PRODUCTION IX",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 286,
    parentId: 404,
    name: "MANUEL HERBERT VEGA",
    department: "BI HDPE PRODUCTION VIII",
    positionName: "OPERADOR III",
    imageName: 30055
, globalDepartment: ""  },
  {
    id: 287,
    parentId: 389,
    name: "IVAN DE JESUS MORALES DOMINGUEZ",
    department: "BI INDUSTRIAL SAFETY",
    positionName: "INGENIERO SEGURIDAD INDUSTRIAL PLENO",
    imageName: 30700
, globalDepartment: ""  },
  {
    id: 288,
    parentId: 671,
    name: "JOSE ALONSO ARIAS SANDOVAL",
    department: "LABORATORY I",
    positionName: "TECNICO LABORATORISTA JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 289,
    parentId: 63,
    name: "IRVING MARTINEZ REYNEL",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR II",
    imageName: 32266
, globalDepartment: ""  },
  {
    id: 290,
    parentId: 225,
    name: "JUAN CARLOS MEDINA HERNANDEZ",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "ANALISTA LOGISTICA SENIOR",
    imageName: 30296
, globalDepartment: ""  },
  {
    id: 291,
    parentId: 444,
    name: "DAVID GUSTAVO SANCHEZ CORDOVA",
    department: "BI HDPE PRODUCTION VI",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 292,
    parentId: 582,
    name: "JOSE ALBERTO SAENZ MORALES",
    department: "BI ETHYLENE MAINTENANCE IV",
    positionName: "SUPERVISOR MECANICO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 293,
    parentId: 678,
    name: "JORGE LUIS HERRERA MONTEJO",
    department: "BI LDPE PRODUCTION III",
    positionName: "OPERADOR IV",
    imageName: 30310
, globalDepartment: ""  },
  {
    id: 294,
    parentId: 103,
    name: "JAZMIN BERNARDINO DURAN",
    department: "BI TRANSPORTATION MANAGEMENT",
    positionName: "ANALISTA GESTION DE TRANSPORTES SENIOR",
    imageName: 29595
, globalDepartment: ""  },
  {
    id: 295,
    parentId: 562,
    name: "JOSE ANDRES ALONSO VILLA",
    department: "BI HDPE PRODUCTION IX",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 296,
    parentId: 140,
    name: "ELVIA PATRICIA OSORIO CID DE LEON",
    department: "BI P&O PEOPLE SERVICES",
    positionName: "ANALISTA SERVICIOS A PERSONAS PLENO",
    imageName: 32508
, globalDepartment: ""  },
  {
    id: 297,
    parentId: 313,
    name: "JUAN CARLOS GOMEZ PALMEROS",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "INGENIERO PRODUCCION SENIOR",
    imageName: 26023
, globalDepartment: ""  },
  {
    id: 298,
    parentId: 313,
    name: "JAIME LOPEZ OROZCO",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 26024
, globalDepartment: ""  },
  {
    id: 299,
    parentId: 582,
    name: "DANIEL TOLEDO SANTIAGO",
    department: "BI ETHYLENE MAINTENANCE II",
    positionName: "SUPERVISOR MANTENIMIENTO",
    imageName: 26250
, globalDepartment: ""  },
  {
    id: 300,
    parentId: 677,
    name: "JOSE ABEL PEREZ ESPINOSA",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "SUPERVISOR ELECTRICO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 301,
    parentId: 581,
    name: "RENE ARGENIS MIJANGOS LORENZO",
    department: "BI HDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 302,
    parentId: 479,
    name: "WILIAMS ARIEL REYES HERNANDEZ",
    department: "BI PRODUCTION NORTH SERVICES",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 303,
    parentId: 484,
    name: "JORGE ALBERTO RAMIREZ PINON",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "OPERADOR III",
    imageName: 26988
, globalDepartment: ""  },
  {
    id: 304,
    parentId: 276,
    name: "FRANCISCO JAVIER PEREZ SEGOVIA",
    department: "BI MAINTENANCE NORTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 305,
    parentId: 418,
    name: "YURIANA SUAREZ GARCIA",
    department: "BI HEALTH, ENVIRONMENT AND SAFETY",
    positionName: "INGENIERO AMBIENTAL JUNIOR",
    imageName: 27146
, globalDepartment: ""  },
  {
    id: 306,
    parentId: 276,
    name: "JAIME AQUINO VALENCIA",
    department: "BI MAINTENANCE NORTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 307,
    parentId: 551,
    name: "MARCOS ADIN SANTIAGO SANCHEZ",
    department: "BI HDPE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 308,
    parentId: 313,
    name: "RICARDO MANUEL TEJEDA MAGANA",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "TECNICO DE OPERACION",
    imageName: 27010
, globalDepartment: ""  },
  {
    id: 309,
    parentId: 505,
    name: "BRUNO HERNANDEZ HERNANDEZ",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 310,
    parentId: 505,
    name: "ANDRES GUILLERMO COLORADO MOLINA",
    department: "RELIABILITY",
    positionName: "INGENIERO MECANICO JUNIOR",
    imageName: 26898
, globalDepartment: ""  },
  {
    id: 311,
    parentId: 261,
    name: "RENE TOLEDO TOLEDO",
    department: "BI LDPE PRODUCTION I",
    positionName: "OPERADOR IV",
    imageName: 27012
, globalDepartment: ""  },
  {
    id: 312,
    parentId: 493,
    name: "CESAR GUADALUPE JOAQUIN MARTINEZ",
    department: "BI HDPE PRODUCTION IV",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 313,
    parentId: 146,
    name: "RAFAEL RODRIGUEZ CONTRERAS",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "SUPERINTENDENTE PRODUCCION",
    imageName: 26310
, globalDepartment: ""  },
  {
    id: 314,
    parentId: 632,
    name: "ELIZABETH PATRICIA RAMIREZ LOPEZ",
    department: "BI PLANNING AND LOGISTIC CONTRACTS",
    positionName: "ESPECIALISTA GESTION DESEMPEÑO LOGISTICO",
    imageName: 26456
, globalDepartment: ""  },
  {
    id: 315,
    parentId: 52,
    name: "ARGENY DE JESUS NIZIMURA COPETE",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 316,
    parentId: 671,
    name: "CARLOS OMAR SOLANO BARBOSA",
    department: "LABORATORY I",
    positionName: "TECNICO LABORATORISTA PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 317,
    parentId: 673,
    name: "LIZETH RAMIREZ BENITEZ",
    department: "BI IMPORTED ETHANE OPERATION",
    positionName: "ANALISTA PLANEACION ETANO IMPORTADO PLENO",
    imageName: 28718
, globalDepartment: ""  },
  {
    id: 318,
    parentId: 63,
    name: "JORGE CRUZ CABRERA",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 319,
    parentId: 241,
    name: "ANTONIO HIDALGO GOMEZ",
    department: "RAW MATERIAIS AND SUPPLY",
    positionName: "COORDINADOR PROCURA Y SUMINISTRO",
    imageName: 28066
, globalDepartment: ""  },
  {
    id: 320,
    parentId: 7,
    name: "MARITZA HERNANDEZ RODRIGUEZ",
    department: "BI PAYABLE ACCOUNTS",
    positionName: "ANALISTA CUENTAS POR PAGAR PLENO",
    imageName: 25856
, globalDepartment: ""  },
  {
    id: 321,
    parentId: 4,
    name: "KAREN IVETTE MARTINEZ ZUNIGA",
    department: "BI TECHNICHAL SERVICES AND PRODUCT DEV",
    positionName: "ESPECIALISTA EN SERVICIO TECNICO Y DESARROLLO",
    imageName: 25861
, globalDepartment: ""  },
  {
    id: 322,
    parentId: 479,
    name: "MOISES PACHECO LUIS",
    department: "BI PRODUCTION NORTH SERVICES II",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 323,
    parentId: 404,
    name: "AARON ULISES PEREZ CHAVEZ",
    department: "BI HDPE PRODUCTION IV",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 324,
    parentId: 562,
    name: "ARANTZA PINOS LOPEZ",
    department: "BI HDPE PRODUCTION III",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 325,
    parentId: 632,
    name: "ABRAHAM ROBERTO RODRIGUEZ CINTA",
    department: "BI PRODUCTION PLANNING",
    positionName: "COORDINADOR PLANEACION DE LA PRODUCCION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 326,
    parentId: 505,
    name: "JOSE ENRIQUE DE DIOS JIMENEZ",
    department: "RELIABILITY",
    positionName: "INGENIERO INSTRUMENTISTA ESPECIALISTA",
    imageName: 26514
, globalDepartment: ""  },
  {
    id: 327,
    parentId: 299,
    name: "JOSE LUIS AVILA MARTINEZ",
    department: "BI ETHYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: 26230
, globalDepartment: ""  },
  {
    id: 328,
    parentId: 670,
    name: "JUAN ROBERTO ARGUELLES MERLIN",
    department: "BI LDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: 26399
, globalDepartment: ""  },
  {
    id: 329,
    parentId: 78,
    name: "CARLOS DEL ANGEL TOLEDO",
    department: "BI ETHYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 330,
    parentId: 479,
    name: "ANDRES BAUTISTA GALVAN",
    department: "BI PRODUCTION NORTH SERVICES VI",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 26401
, globalDepartment: ""  },
  {
    id: 331,
    parentId: 465,
    name: "ALBERTO CANA TORRES",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 332,
    parentId: 0,
    name: "ALEJANDRA DOMINGUEZ OLAN",
    department: "BI TECHNICHAL LABORATORY",
    positionName: "COORDINADOR LABORATORIO SERVICIO TECNICO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 333,
    parentId: 632,
    name: "LUIS DAVID SOSA HERNANDEZ",
    department: "BI DEMAND PLANNING",
    positionName: "COORDINADOR PLANEACION DE LA DEMANDA",
    imageName: 28999
, globalDepartment: ""  },
  {
    id: 334,
    parentId: 313,
    name: "LEONARDO ANTONIO GOMEZ SANCHEZ",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 335,
    parentId: 0,
    name: "KEYSY LUNIZA LOPEZ TULLEY",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO PLANEACION JUNIOR",
    imageName: 29076
, globalDepartment: ""  },
  {
    id: 336,
    parentId: 466,
    name: "WILLIANS MARTINEZ TORRES",
    department: "INDUSTRIAL MEXICO",
    positionName: "INGENIERO PROCESOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 337,
    parentId: 413,
    name: "HECTOR HUGO COLMENARES ORTEGA",
    department: "BI ACCOUNTING I",
    positionName: "ESPECIALISTA CONTABLE",
    imageName: 29084
, globalDepartment: ""  },
  {
    id: 338,
    parentId: 418,
    name: "OSCAR GERMAN LUNA SILVA",
    department: "BI HEALTH, ENVIRONMENT AND SAFETY",
    positionName: "INGENIERO AMBIENTAL JUNIOR",
    imageName: 28902
, globalDepartment: ""  },
  {
    id: 339,
    parentId: 402,
    name: "RODELMAR RICARDEZ PEREZ",
    department: "BI MAINTENANCE SOUTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 340,
    parentId: 70,
    name: "JOSE DAMIAN HERRERA MAY",
    department: "BI MAINTENANCE SOUTH SERVICES III",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 341,
    parentId: 103,
    name: "ELSA ARANTXA PEREDO ROJAS",
    department: "BI TRANSPORTATION MANAGEMENT",
    positionName: "ANALISTA GESTION DE TRANSPORTES SENIOR",
    imageName: 29159
, globalDepartment: ""  },
  {
    id: 342,
    parentId: 170,
    name: "JOSE LUIS VELA BARRADAS",
    department: "BI POLYETHYLENTE OPERATIONS",
    positionName: "GERENTE PRODUCCION",
    imageName: 25682
, globalDepartment: ""  },
  {
    id: 343,
    parentId: 682,
    name: "MARIANA ALBARRAN FLORES",
    department: "SUSTAINABILITY AND CIRCULAR ECONOMY",
    positionName: "GERENTE ECONOMIA CIRCULAR Y SUSTENTABILIDAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 344,
    parentId: 581,
    name: "OSCAR LUIS REYES MARTINEZ",
    department: "BI HDPE PRODUCTION V",
    positionName: "INGENIERO DE EFECTIVIDAD OPERACIONAL",
    imageName: 25261
, globalDepartment: ""  },
  {
    id: 345,
    parentId: 170,
    name: "SAGRARIO ESMERALDA DEL CARMEN PARTIDA GUTIERREZ",
    department: "LABORATORIES-I",
    positionName: "SUPERINTENDENTE LABORATORIO",
    imageName: 25521
, globalDepartment: ""  },
  {
    id: 346,
    parentId: 204,
    name: "REYNA ISABEL DIAZ CHIMAL",
    department: "BI COMMERCIAL - PE FLEXIBLES",
    positionName: "GERENTE DE CUENTA II",
    imageName: 24750
, globalDepartment: ""  },
  {
    id: 347,
    parentId: 581,
    name: "SAUL MORA MEZA",
    department: "BI HDPE PRODUCTION I",
    positionName: "INGENIERO PRODUCCION PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 348,
    parentId: 682,
    name: "DULCE MARIA GONZALEZ TORRES",
    department: "BRASKEM IDESA",
    positionName: "ASISTENTE EJECUTIVA",
    imageName: 23881
, globalDepartment: ""  },
  {
    id: 349,
    parentId: 586,
    name: "MARK MOSCOSA CHAVEZ",
    department: "WAREHOUSE",
    positionName: "SUPERINTENDENTE ALMACEN",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 350,
    parentId: 694,
    name: "JOSE DAVID ALAMILLA CARRASCO",
    department: "BI COLLECTION",
    positionName: "COORDINADOR DE COBRANZA",
    imageName: 24644
, globalDepartment: ""  },
  {
    id: 351,
    parentId: 691,
    name: "FANI MEDRANO VAZQUEZ",
    department: "BI CONTROLLING & RISKS",
    positionName: "GERENTE CONTRALORIA,RIESGOS Y MEJORA NEGOCIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 352,
    parentId: 675,
    name: "OMAR LUNA RUIZ",
    department: "BI INDUSTRIAL EFFECTIVENESS",
    positionName: "ESPECIALISTA SEGURIDAD FUNCIONAL",
    imageName: 25642
, globalDepartment: ""  },
  {
    id: 353,
    parentId: 505,
    name: "JESSICA VALENCIA PEREZ",
    department: "RELIABILITY",
    positionName: "BECARIO CONFIABILIDAD",
    imageName: 41350
, globalDepartment: ""  },
  {
    id: 354,
    parentId: 505,
    name: "NICOLAS ANTONIO HERNANDEZ",
    department: "RELIABILITY",
    positionName: "INGENIERO MANTENIMIENTO PLENO",
    imageName: 34008
, globalDepartment: ""  },
  {
    id: 355,
    parentId: 0,
    name: "JULIETA IVONNE SANCHEZ SILVA",
    department: "BUSINESS PROCESSES",
    positionName: "ESPECIALISTA AUDITORIA INTERNA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 356,
    parentId: 204,
    name: "YAROMI GONZALEZ MORALES",
    department: "BI COMMERCIAL - PE FLEXIBLES",
    positionName: "EJECUTIVO DE CUENTA JUNIOR",
    imageName: 33785
, globalDepartment: ""  },
  {
    id: 357,
    parentId: 409,
    name: "BRAYAN YAIR NOUCHE GONZALEZ",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 358,
    parentId: 231,
    name: "MARINA ISABEL MONTAN CONSOLA",
    department: "SERVICES AND CONTRACTS I",
    positionName: "ANALISTA CONTRATOS Y SERVICIOS SENIOR",
    imageName: 29929
, globalDepartment: ""  },
  {
    id: 359,
    parentId: 261,
    name: "JOEL REYES RODRIGUEZ",
    department: "BI LDPE PRODUCTION I",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 360,
    parentId: 562,
    name: "MISAEL OSORIO SANCHEZ",
    department: "BI HDPE PRODUCTION II",
    positionName: "OPERADOR III",
    imageName: 30357
, globalDepartment: ""  },
  {
    id: 361,
    parentId: 569,
    name: "CRISTHIAN GILBERTO HERNANDEZ REYES",
    department: "OPERATIONS IT MEXICO",
    positionName: "ANALISTA SOPORTE TECNICO PLENO",
    imageName: 31481
, globalDepartment: ""  },
  {
    id: 362,
    parentId: 953,
    name: "ROLANDO GALICIA RODRIGUEZ",
    department: "BI MAINTENANCE PLANNING",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 363,
    parentId: 298,
    name: "ULISES HERRERA CRUZ",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR II",
    imageName: 30995
, globalDepartment: ""  },
  {
    id: 364,
    parentId: 495,
    name: "OSCAR HERNANDEZ VALDEZ",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 365,
    parentId: 157,
    name: "PAOLA GONZALEZ SURIANO",
    department: "MATERIALS",
    positionName: "ANALISTA PROCURA Y SUMINISTRO PLENO",
    imageName: 31496
, globalDepartment: ""  },
  {
    id: 366,
    parentId: 244,
    name: "SAMIR KALEFF LOPEZ ALCANTARA",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: 30271
, globalDepartment: ""  },
  {
    id: 367,
    parentId: 116,
    name: "CLAUDIA DAVILA SILVA",
    department: "COMPLIANCE MEXICO",
    positionName: "ESPECIALISTA COMPLIANCE",
    imageName: 31211
, globalDepartment: ""  },
  {
    id: 368,
    parentId: 116,
    name: "OMAR MORALES HERNANDEZ",
    department: "COMPLIANCE MEXICO",
    positionName: "ANALISTA COMPLIANCE PLENO",
    imageName: 29836
, globalDepartment: ""  },
  {
    id: 369,
    parentId: 389,
    name: "JORGE ARMANDO ALCANTARA VAZQUEZ",
    department: "BI INDUSTRIAL SAFETY",
    positionName: "INGENIERO SEGURIDAD INDUSTRIAL JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 370,
    parentId: 214,
    name: "DALILA BETHSABE LUNA MONTALVO",
    department: "BI PROCESS SAFETY",
    positionName: "INGENIERO SEGURIDAD DE PROCESOS SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 371,
    parentId: 63,
    name: "EDGAR CESAR NORIEGA MOLINA",
    department: "BI PRODUCTION SOUTH SERVICES IV",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 372,
    parentId: 349,
    name: "JOSE ALBERTO GUADALUPE CAZARES OSEGUERA",
    department: "WAREHOUSE",
    positionName: "INGENIERO MATERIALES PLENO",
    imageName: 30138
, globalDepartment: ""  },
  {
    id: 373,
    parentId: 648,
    name: "FEDERICO DEL CARMEN ALFONSO GONZALEZ",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 374,
    parentId: 244,
    name: "FREDDY OSORIO BARUCH",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 375,
    parentId: 642,
    name: "FERNANDA GUADALUPE CHAVEZ SANCHEZ",
    department: "BI CUSTOMER SERVICES IM",
    positionName: "ANALISTA SERVICIO AL CLIENTE MI PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 376,
    parentId: 231,
    name: "ALEJANDRO HERNANDEZ RUBIO",
    department: "SERVICES AND CONTRACTS I",
    positionName: "ANALISTA CONTRATOS Y SERVICIOS PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 377,
    parentId: 671,
    name: "LEYDI DEL CARMEN CONTRERAS LOPEZ",
    department: "LABORATORY I",
    positionName: "TECNICO LABORATORISTA JUNIOR",
    imageName: 32813
, globalDepartment: ""  },
  {
    id: 378,
    parentId: 505,
    name: "FIDEL MULATO ENRIQUEZ",
    department: "RELIABILITY",
    positionName: "INGENIERO CONFIABILIDAD SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 379,
    parentId: 669,
    name: "DANIEL ESPARZA GUILLEN",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: 32779
, globalDepartment: ""  },
  {
    id: 380,
    parentId: 116,
    name: "SILVIA CAROLINA ZAMORA VEGA",
    department: "COMPLIANCE MEXICO",
    positionName: "ESPECIALISTA COMPLIANCE",
    imageName: 32519
, globalDepartment: ""  },
  {
    id: 381,
    parentId: 404,
    name: "KEILA HUSIM ZARATE REYES",
    department: "BI HDPE PRODUCTION VIII",
    positionName: "OPERADOR IV",
    imageName: 27058
, globalDepartment: ""  },
  {
    id: 382,
    parentId: 474,
    name: "FERNANDO ORTIZ MONTERRUBIO",
    department: "BI ETHYLENE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 383,
    parentId: 70,
    name: "ROGELIO MIGUEL REYES",
    department: "BI MAINTENANCE SOUTH SERVICES III",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 384,
    parentId: 484,
    name: "JACOB ROMAN MORALES",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 385,
    parentId: 298,
    name: "MIRNA DE JESUS ROCHA ALCANTARA",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 386,
    parentId: 279,
    name: "ARMANDO ROMAN DIAZ",
    department: "ANALYTICAL AUTOMATION",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 387,
    parentId: 670,
    name: "ROQUE PLATA FLORES",
    department: "BI LDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: 26429
, globalDepartment: ""  },
  {
    id: 388,
    parentId: 313,
    name: "FIDEL RAMIREZ HERNANDEZ",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "ANALISTA INVENTARIOS JUNIOR",
    imageName: 26431
, globalDepartment: ""  },
  {
    id: 389,
    parentId: 223,
    name: "MARCO ANTONIO SANTOS GONZALEZ",
    department: "BI INDUSTRIAL SAFETY",
    positionName: "COORDINADOR SEGURIDAD INDUSTRIAL",
    imageName: 26608
, globalDepartment: ""  },
  {
    id: 390,
    parentId: 204,
    name: "RAFAEL ANTONIO GALLARDO FERNANDEZ",
    department: "BI COMMERCIAL - PE FLEXIBLES",
    positionName: "GERENTE DE CUENTA III",
    imageName: 26609
, globalDepartment: ""  },
  {
    id: 391,
    parentId: 505,
    name: "MARIO ALBERTO SOBERANO CORDOVA",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: 27009
, globalDepartment: ""  },
  {
    id: 392,
    parentId: 313,
    name: "LILIANA TELLEZ DOLORES",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 393,
    parentId: 215,
    name: "SHIRLEY ZAMUDIO ESQUIVEL",
    department: "BI EXTERNAL AFFAIRS",
    positionName: "ANALISTA RELACIONES INSTITUCIONALES JR",
    imageName: 27587
, globalDepartment: ""  },
  {
    id: 394,
    parentId: 474,
    name: "ADRIAN RIOS DOMINGUEZ",
    department: "BI ETHYLENE PRODUCTION I",
    positionName: "INGENIERO PRODUCCION PLENO",
    imageName: 26435
, globalDepartment: ""  },
  {
    id: 395,
    parentId: 7,
    name: "SUSANA GABRIELA SANTOS VAZQUEZ",
    department: "BI PAYABLE ACCOUNTS",
    positionName: "ANALISTA CUENTAS POR PAGAR SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 396,
    parentId: 352,
    name: "JUAN JOSE AVILA PEREZ",
    department: "AUTOMATION MEXICO",
    positionName: "INGENIERO AUTOMATIZACION SENIOR",
    imageName: 26082
, globalDepartment: ""  },
  {
    id: 397,
    parentId: 671,
    name: "MARTHA PATRICIA MENDOZA RODRIGUEZ",
    department: "LABORATORY I",
    positionName: "TECNICO LABORATORISTA SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 398,
    parentId: 313,
    name: "WILLIAMS DE LA CRUZ LUNA",
    department: "BI PRODUCTION SOUTH SERVICES V",
    positionName: "INGENIERO DE EFECTIVIDAD OPERACIONAL",
    imageName: 26467
, globalDepartment: ""  },
  {
    id: 399,
    parentId: 696,
    name: "EVELYN HERNANDEZ REYES",
    department: "PRODUCT AND MARKET INTELIGENCE",
    positionName: "GERENTE DE CUENTA III",
    imageName: 27422
, globalDepartment: ""  },
  {
    id: 400,
    parentId: 63,
    name: "MIGUEL ANGEL ESCRIBANO BACHILAR",
    department: "BI PRODUCTION SOUTH SERVICES IV",
    positionName: "OPERADOR IV",
    imageName: 26473
, globalDepartment: ""  },
  {
    id: 401,
    parentId: 669,
    name: "MANOLO MARQUEZ MARTINEZ",
    department: "BI LDPE PRODUCTION IV",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 402,
    parentId: 677,
    name: "PEDRO ALBERTO REYES SANCHEZ",
    department: "BI MAINTENANCE SOUTH SERVICES II",
    positionName: "SUPERVISOR ESTATICO",
    imageName: 26344
, globalDepartment: ""  },
  {
    id: 403,
    parentId: 648,
    name: "ADRIEL FELIPE HERNANDEZ BAUTISTA",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: 26487
, globalDepartment: ""  },
  {
    id: 404,
    parentId: 581,
    name: "ANTONIO HERNANDEZ CORRO",
    department: "BI HDPE PRODUCTION VIII",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 405,
    parentId: 505,
    name: "THALIA MERCEDES PACHECO LUNA",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 406,
    parentId: 227,
    name: "FELIX IGNOT VAZQUEZ",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: 26494
, globalDepartment: ""  },
  {
    id: 407,
    parentId: 474,
    name: "PEDRO MOJICA CASTANEDA",
    department: "BI ETHYLENE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: 26370
, globalDepartment: ""  },
  {
    id: 408,
    parentId: 313,
    name: "JESUS GAEL RAMIREZ MENDEZ",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "INGENIERO PRODUCCION SENIOR",
    imageName: 26987
, globalDepartment: ""  },
  {
    id: 409,
    parentId: 479,
    name: "CARLOS ALBERTO MATHEY CONCHA",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 26371
, globalDepartment: ""  },
  {
    id: 410,
    parentId: 333,
    name: "JUAN CARLOS BECERRA TOLEDO",
    department: "BI DEMAND PLANNING",
    positionName: "ANALISTA PLANEACION DE LA DEMANDA SENIOR",
    imageName: 28124
, globalDepartment: ""  },
  {
    id: 411,
    parentId: 299,
    name: "JOSE JUAN AQUINO RAMOS",
    department: "BI ETHYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 412,
    parentId: 475,
    name: "GERARDO BAUTISTA AQUINO",
    department: "BI MAINTENANCE NORTH SERVICES II",
    positionName: "SUPERVISOR ELECTRICO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 413,
    parentId: 955,
    name: "ROMAN CASTILLO RUIZ",
    department: "BI ACCOUNTING I",
    positionName: "GERENTE CONTABILIDAD",
    imageName: 27350
, globalDepartment: ""  },
  {
    id: 414,
    parentId: 259,
    name: "OMAR MANUEL FUENTES",
    department: "BI HDPE PRODUCTION III",
    positionName: "OPERADOR V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 415,
    parentId: 495,
    name: "CLAUDIA KARINA MAGALLANES HERRERA",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA SENIOR",
    imageName: 28799
, globalDepartment: ""  },
  {
    id: 416,
    parentId: 955,
    name: "ANDRES HERNANDEZ MERCADO",
    department: "BI TAX",
    positionName: "GERENTE FISCAL",
    imageName: 28834
, globalDepartment: ""  },
  {
    id: 417,
    parentId: 444,
    name: "ALEJANDRO CONTRERAS RODRIGUEZ",
    department: "BI HDPE PRODUCTION VI",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 418,
    parentId: 223,
    name: "ANA LUISA MARTINEZ LOPEZ",
    department: "BI HEALTH, ENVIRONMENT AND SAFETY",
    positionName: "COORDINADOR MEDIO AMBIENTE Y SALUD",
    imageName: 25683
, globalDepartment: ""  },
  {
    id: 419,
    parentId: 37,
    name: "YERASETH GRACIELA BELLO QUIJANO",
    department: "BI INSTITUTIONAL MARKETING",
    positionName: "COORDINADOR MARKETING INSTITUCIONAL",
    imageName: 22731
, globalDepartment: ""  },
  {
    id: 420,
    parentId: 225,
    name: "BRIANDA ZULEMA ESPEJO MARTINEZ",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "ANALISTA LOGISTICA JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 421,
    parentId: 487,
    name: "CARLOS DAVID TORRES LOPEZYANEZ",
    department: "IMPORTS AND SUPPLY",
    positionName: "ANALISTA DESARROLLO DE PROVEEDORES PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 422,
    parentId: 541,
    name: "MARIA FERNANDA MARTINEZ ALVAREZ",
    department: "BI LOGISTIC CONTRACTS",
    positionName: "ANALISTA CONTRATOS LOGISTICOS JUNIOR",
    imageName: 41349
, globalDepartment: ""  },
  {
    id: 423,
    parentId: 170,
    name: "SAMUEL SANCHEZ CRUZ",
    department: "PROCESS ENGINEERING",
    positionName: "INGENIERO PROCESOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 424,
    parentId: 333,
    name: "LUIS FERNANDO MADRIGAL MARTINEZ",
    department: "BI DEMAND PLANNING",
    positionName: "ANALISTA PLANEACION DE LA DEMANDA PLENO",
    imageName: 34046
, globalDepartment: ""  },
  {
    id: 425,
    parentId: 63,
    name: "JESSICA ALEJANDRA PEREZ CABRERA",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: 41593
, globalDepartment: ""  },
  {
    id: 426,
    parentId: 675,
    name: "GUADALUPE BIELMA MARTINEZ",
    department: "AUTOMATION MEXICO",
    positionName: "INGENIERO AUTOMATIZACION PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 427,
    parentId: 569,
    name: "ARTURO JAVIER ZUNIGA CASIMIRO",
    department: "OPERATIONS IT MEXICO",
    positionName: "ANALISTA SOPORTE TECNICO PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 428,
    parentId: 34,
    name: "ANGEL EMILIO RODRIGUEZ CRUZ",
    department: "BI MAINTENANCE SOUTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: 33694
, globalDepartment: ""  },
  {
    id: 429,
    parentId: 507,
    name: "ALEJANDRA GAYTAN CRUZ",
    department: "BI TRAINING",
    positionName: "ANALISTA CAPACITACION PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 430,
    parentId: 150,
    name: "IGNACIO EMMANUEL DE LA CRUZ LARA",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 431,
    parentId: 322,
    name: "FERMIN ALONSO TORRES HERNANDEZ",
    department: "BI PRODUCTION NORTH SERVICES IV",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 432,
    parentId: 284,
    name: "ALEJANDRA ABIGAIL AGUIRRE ESTRADA",
    department: "BI CUSTOMER SERVICES EM",
    positionName: "ANALISTA SERVICIO AL CLIENTE ME JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 433,
    parentId: 562,
    name: "SALVADOR VEGA SANTIAGO",
    department: "BI HDPE PRODUCTION IX",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 434,
    parentId: 500,
    name: "HEIDI GABRIELA HERNANDEZ CONTRERAS",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "ANALISTA PLANEACION INDUSTRIAL PLENO",
    imageName: 29776
, globalDepartment: ""  },
  {
    id: 435,
    parentId: 34,
    name: "UZIEL LOZADA CHIMA",
    department: "BI MAINTENANCE SOUTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO III",
    imageName: 32133
, globalDepartment: ""  },
  {
    id: 436,
    parentId: 277,
    name: "SERGIO SARABIA GAMAS",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 437,
    parentId: 313,
    name: "ANGEL DE JESUS DIAZ RAMOS",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "TECNICO DE OPERACION",
    imageName: 29827
, globalDepartment: ""  },
  {
    id: 438,
    parentId: 167,
    name: "CLAUDIA ANAHI HERNANDEZ MUNOZ",
    department: "BI CUSTOMER SERVICES",
    positionName: "ANALISTA FACTURACION JUNIOR",
    imageName: 30695
, globalDepartment: ""  },
  {
    id: 439,
    parentId: 646,
    name: "JUAN CARLOS ESTEBAN DOMINGUEZ",
    department: "BI HDPE PRODUCTION II",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 440,
    parentId: 551,
    name: "MARCO ANTONIO SALAZAR VILLANUEVA",
    department: "BI HDPE PRODUCTION II",
    positionName: "OPERADOR III",
    imageName: 30056
, globalDepartment: ""  },
  {
    id: 441,
    parentId: 495,
    name: "ALEXIS VAZQUEZ NAVARRETE",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA JUNIOR",
    imageName: 32259
, globalDepartment: ""  },
  {
    id: 442,
    parentId: 52,
    name: "MELITON CRUZ LOPEZ",
    department: "BI ETHYLENE PRODUCTION I",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 443,
    parentId: 56,
    name: "PEDRO ENRIQUE SANCHEZ VALDEZ",
    department: "BI IMPORTED ETHANE OPERATION",
    positionName: "TECNICO DE OPERACION",
    imageName: 29857
, globalDepartment: ""  },
  {
    id: 444,
    parentId: 581,
    name: "RAFAEL RAMIREZ BENITEZ",
    department: "BI HDPE PRODUCTION VI",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 30222
, globalDepartment: ""  },
  {
    id: 445,
    parentId: 484,
    name: "AMANCIO PETRIS RINCON",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR III",
    imageName: 32275
, globalDepartment: ""  },
  {
    id: 446,
    parentId: 222,
    name: "CARLOS MANUEL LOPEZ DOMINGUEZ",
    department: "BI LDPE PRODUCTION III",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 447,
    parentId: 669,
    name: "SERGIO ANTONIO BARTOLO DECEANO",
    department: "BI LDPE PRODUCTION IV",
    positionName: "OPERADOR II",
    imageName: 30300
, globalDepartment: ""  },
  {
    id: 448,
    parentId: 562,
    name: "LEYDI DE JESUS TOSCANO",
    department: "BI HDPE PRODUCTION VII",
    positionName: "OPERADOR III",
    imageName: 31231
, globalDepartment: ""  },
  {
    id: 449,
    parentId: 300,
    name: "JUAN GERMAN GONZALEZ MATEY",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: 30770
, globalDepartment: ""  },
  {
    id: 450,
    parentId: 692,
    name: "GUADALUPE NORIEGA CASTILLO",
    department: "COMMERCIAL POLYOLEFINS MEXICO",
    positionName: "ASISTENTE EJECUTIVA",
    imageName: 29634
, globalDepartment: ""  },
  {
    id: 451,
    parentId: 969,
    name: "ADRIANA EQUIHUA ZAMORA",
    department: "BI COMPENSATION AND BENEFITS I",
    positionName: "ANALISTA REMUNERACION Y BENEFICIOS SENIOR",
    imageName: 32557
, globalDepartment: ""  },
  {
    id: 452,
    parentId: 343,
    name: "MARIA FERNANDA DIAZ AMBRIZ",
    department: "SUSTAINABILITY AND CIRCULAR ECONOMY",
    positionName: "ANALISTA SUSTENTABILIDAD JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 453,
    parentId: 259,
    name: "CARLOS SAMUEL ALFONSO DEL RIVERO",
    department: "BI HDPE PRODUCTION III",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 454,
    parentId: 624,
    name: "ANA VICTORIA RAMOS RICANO",
    department: "SERVICES AND CONTRACTS",
    positionName: "ANALISTA CONTRATOS Y SERVICIOS SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 455,
    parentId: 214,
    name: "JOSE RODRIGO LOPEZ SANCHEZ",
    department: "BI PROCESS SAFETY",
    positionName: "INGENIERO SEGURIDAD DE PROCESOS PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 456,
    parentId: 63,
    name: "HECTOR HERNANDEZ REYES",
    department: "BI PRODUCTION SOUTH SERVICES IV",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 457,
    parentId: 332,
    name: "LUCIA RODRIGUEZ LOPEZ",
    department: "BI TECHNICHAL LABORATORY",
    positionName: "INGENIERO LABORATORIO JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 458,
    parentId: 156,
    name: "MIGUEL ANGEL RIQUER FELIPE",
    department: "PROCESS ENGINEERING",
    positionName: "INGENIERO PROCESOS SENIOR",
    imageName: 26026
, globalDepartment: ""  },
  {
    id: 459,
    parentId: 546,
    name: "IVAN LOPEZ GOMEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 460,
    parentId: 444,
    name: "CESAR MOCTEZUMA RODRIGUEZ",
    department: "BI HDPE PRODUCTION VI",
    positionName: "OPERADOR V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 461,
    parentId: 227,
    name: "ANDRES FRANCISCO RAMOS PALMA",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 462,
    parentId: 389,
    name: "HEIDY MARTINEZ ORDONEZ",
    department: "BI INDUSTRIAL SAFETY",
    positionName: "INGENIERO SEGURIDAD INDUSTRIAL PLENO",
    imageName: 27568
, globalDepartment: ""  },
  {
    id: 463,
    parentId: 0,
    name: "CARLOS IGNACIO REYES VIRGEN",
    department: "CONTINUOUS IMPROVEMENT & GPS",
    positionName: "INGENIERO MEJORA CONTINUA SENIOR",
    imageName: 26027
, globalDepartment: ""  },
  {
    id: 464,
    parentId: 56,
    name: "LUDWIG IVAN OSCAR HERNANDEZ",
    department: "BI IMPORTED ETHANE OPERATION",
    positionName: "TECNICO DE OPERACION",
    imageName: 26425
, globalDepartment: ""  },
  {
    id: 465,
    parentId: 313,
    name: "JENNIFER YELITZA ROSAS ZILLY",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 26592
, globalDepartment: ""  },
  {
    id: 466,
    parentId: 170,
    name: "GABRIEL GARCIA JIMENEZ",
    department: "INDUSTRIAL MEXICO",
    positionName: "SUPERINTENDENTE DE PROCESOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 467,
    parentId: 345,
    name: "RAFAEL HERRERA BLANCO",
    department: "LABORATORIES-I",
    positionName: "INGENIERO LABORATORISTA SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 468,
    parentId: 409,
    name: "ULISES ALVAREZ CORTEZ",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 469,
    parentId: 150,
    name: "JACOB GUZMAN AYALA",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR IV",
    imageName: 26931
, globalDepartment: ""  },
  {
    id: 470,
    parentId: 507,
    name: "OLGA ELIZABETH ALFARO ROMERO",
    department: "BI TRAINING",
    positionName: "COORDINADOR CAPACITACION",
    imageName: 27147
, globalDepartment: ""  },
  {
    id: 471,
    parentId: 505,
    name: "JESUS ENRIQUE ARROYO CANSECO",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 472,
    parentId: 52,
    name: "SERGIO IVAN HERNANDEZ JUAREZ",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 473,
    parentId: 581,
    name: "JOSE EDUARDO HERNANDEZ AGUIRRE",
    department: "BI HDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: 27039
, globalDepartment: ""  },
  {
    id: 474,
    parentId: 146,
    name: "LEANDRO RUIZ RUIZ",
    department: "BI ETHYLENE PRODUCTION",
    positionName: "SUPERINTENDENTE PRODUCCION",
    imageName: 26084
, globalDepartment: ""  },
  {
    id: 475,
    parentId: 666,
    name: "DORIAN MANUEL ZARRABAL CARMONA",
    department: "BI MAINTENANCE NORTH SERVICES",
    positionName: "SUPERINTENDENTE MANTENIMIENTO",
    imageName: 26307
, globalDepartment: ""  },
  {
    id: 476,
    parentId: 465,
    name: "ADRIAN LOPEZ ANTONIO",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 477,
    parentId: 244,
    name: "JESUS ZARATE FUENTES",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 478,
    parentId: 238,
    name: "CARLOS VICENTE HERNANDEZ JIMENEZ",
    department: "MONITORING I",
    positionName: "ANALISTA MEJORA DE NEGOCIO SENIOR",
    imageName: 26112
, globalDepartment: ""  },
  {
    id: 479,
    parentId: 146,
    name: "ALFREDO NUNEZ SIMG",
    department: "BI PRODUCTION NORTH SERVICES",
    positionName: "SUPERINTENDENTE PRODUCCION",
    imageName: 26342
, globalDepartment: ""  },
  {
    id: 480,
    parentId: 646,
    name: "GERARDO MORALES PRISCILIANO",
    department: "BI HDPE PRODUCTION I",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 481,
    parentId: 690,
    name: "PAOLA AQUINO PEREZ",
    department: "BI LOGISTICS",
    positionName: "GERENTE LOGISTICA",
    imageName: 28095
, globalDepartment: ""  },
  {
    id: 482,
    parentId: 499,
    name: "BERNARDO CAMARA FERNANDEZ",
    department: "EMERGENCIES",
    positionName: "LIDER CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 483,
    parentId: 83,
    name: "RAUL ALDO MOLOTLA ROBERTSON",
    department: "BI TAX I",
    positionName: "ANALISTA IMPUESTOS PLENO",
    imageName: 28102
, globalDepartment: ""  },
  {
    id: 484,
    parentId: 313,
    name: "FABIAN PABLO ISIDORO",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 26498
, globalDepartment: ""  },
  {
    id: 485,
    parentId: 675,
    name: "JANET CARRENO ZAMORA",
    department: "AUTOMATION MEXICO",
    positionName: "INGENIERO AUTOMATIZACION SENIOR",
    imageName: 28103
, globalDepartment: ""  },
  {
    id: 486,
    parentId: 69,
    name: "ERIKA MIRELLE FERNANDEZ RUBIO",
    department: "BI COMMERCIAL - PE RIGID",
    positionName: "GERENTE DE CUENTA III",
    imageName: 27337
, globalDepartment: ""  },
  {
    id: 487,
    parentId: 241,
    name: "JAIME IVAN ANDRADE OLALDE",
    department: "IMPORTS AND SUPPLY",
    positionName: "COORDINADOR DE IMPORTACION Y SUMINISTROS",
    imageName: 28125
, globalDepartment: ""  },
  {
    id: 488,
    parentId: 204,
    name: "GUILLERMO ALEJANDRO MARQUEZ SAMANIEGO",
    department: "BI COMMERCIAL - PE FLEXIBLES",
    positionName: "GERENTE DE CUENTA III",
    imageName: 27801
, globalDepartment: ""  },
  {
    id: 489,
    parentId: 157,
    name: "JORGE LUIS BRAVO ORTEGA",
    department: "MATERIALS",
    positionName: "ANALISTA PROCURA Y SUMINISTRO SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 490,
    parentId: 562,
    name: "ERNESTO ALONSO ABAD",
    department: "BI HDPE PRODUCTION III",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 491,
    parentId: 572,
    name: "ALEJANDRO DE LA ROSA HERNANDEZ",
    department: "BI MAINTENANCE NORTH SERVICES III",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 492,
    parentId: 484,
    name: "JOSE GUADALUPE LIMON RIOS",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR IV",
    imageName: 26412
, globalDepartment: ""  },
  {
    id: 493,
    parentId: 581,
    name: "HUGO LOPEZ QUINO",
    department: "BI HDPE PRODUCTION IV",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 494,
    parentId: 677,
    name: "JOSE ENRIQUE FERNANDEZ CAPETILLO",
    department: "BI MAINTENANCE SOUTH SERVICES",
    positionName: "AUXILIAR MANTENIMIENTO",
    imageName: 29162
, globalDepartment: ""  },
  {
    id: 495,
    parentId: 345,
    name: "JULIO CESAR JIMENEZ REVUELTA",
    department: "LABORATORY II",
    positionName: "SUPERVISOR DE LABORATORIO",
    imageName: 28793
, globalDepartment: ""  },
  {
    id: 496,
    parentId: 55,
    name: "CHRISTIAN RAMIREZ DOMINGUEZ",
    department: "MATERIALS, SERVICES AND CONTRACTS",
    positionName: "ANALISTA PROCURA Y SUMINISTRO PLENO",
    imageName: 28835
, globalDepartment: ""  },
  {
    id: 497,
    parentId: 582,
    name: "HECTOR ABEL MARTINEZ GALINDO",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "INGENIERO MANTENIMIENTO SENIOR",
    imageName: 29149
, globalDepartment: ""  },
  {
    id: 498,
    parentId: 349,
    name: "JORGE NOLASCO MENA",
    department: "WAREHOUSE",
    positionName: "SUPERVISOR ALMACEN",
    imageName: 29154
, globalDepartment: ""  },
  {
    id: 499,
    parentId: 223,
    name: "GUSTAVO NIVON ALVAREZ",
    department: "EMERGENCIES",
    positionName: "COORDINADOR EMERGENCIAS",
    imageName: 25671
, globalDepartment: ""  },
  {
    id: 500,
    parentId: 170,
    name: "HUGO ESTUARDO FERNANDEZ COVARRUBIAS",
    department: "PROCESS ENGINEERING",
    positionName: "GERENTE PROCESOS",
    imageName: 24873
, globalDepartment: ""  },
  {
    id: 501,
    parentId: 667,
    name: "MARTHA BEATRIZ BARTOLO PONCET",
    department: "BI SOCIAL RESPONSIBILITY",
    positionName: "ANALISTA RESPONSABILIDAD SOCIAL PLENO",
    imageName: 24155
, globalDepartment: ""  },
  {
    id: 502,
    parentId: 69,
    name: "JORGE ARMANDO MORENO CORTES",
    department: "BI COMMERCIAL - PE RIGID",
    positionName: "GERENTE DE CUENTA IV",
    imageName: 24902
, globalDepartment: ""  },
  {
    id: 503,
    parentId: 581,
    name: "REY ARTURO BASURTO VIDANA",
    department: "BI HDPE PRODUCTION",
    positionName: "ESPECIALISTA DE PRODUCCION",
    imageName: 25737
, globalDepartment: ""  },
  {
    id: 504,
    parentId: 581,
    name: "JOSE GONZALO VICENTE TREJO",
    department: "BI HDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: 25750
, globalDepartment: ""  },
  {
    id: 505,
    parentId: 170,
    name: "OMAR CABALLERO GUTIERREZ",
    department: "RELIABILITY",
    positionName: "SUPERINTENDENTE CONFIABILIDAD",
    imageName: 24843
, globalDepartment: ""  },
  {
    id: 506,
    parentId: 69,
    name: "JESUS GILBERTO AGUILAR FERRERA",
    department: "BI COMMERCIAL - PE RIGID",
    positionName: "GERENTE DE CUENTA II",
    imageName: 25637
, globalDepartment: ""  },
  {
    id: 507,
    parentId: 37,
    name: "MARTHA SADDAI FUENTES BECERRA",
    department: "BI PEOPLE DEVELOPMENT I",
    positionName: "GERENTE DESARROLLO HUMANO",
    imageName: 23733
, globalDepartment: ""  },
  {
    id: 508,
    parentId: 0,
    name: "MARIO DANIEL ZACARIAS RAMIREZ",
    department: "QUALITY MEXICO",
    positionName: "COORDINADOR ASEGURAMIENTO DE CALIDAD",
    imageName: 34627
, globalDepartment: ""  },
  {
    id: 509,
    parentId: 244,
    name: "JOSE GABRIEL CRUZ CRUZ",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 510,
    parentId: 667,
    name: "JESUS DOMINGUEZ LOPEZ",
    department: "BI SOCIAL RESPONSIBILITY",
    positionName: "ANALISTA RESPONSABILIDAD SOCIAL JUNIOR",
    imageName: 34014
, globalDepartment: ""  },
  {
    id: 511,
    parentId: 78,
    name: "EDWIN GREY RODRIGUEZ ARIAS",
    department: "BI ETHYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 512,
    parentId: 103,
    name: "JOSE PABLO ORTEGA SPRINGALL",
    department: "BI TRANSPORTATION MANAGEMENT",
    positionName: "ANALISTA GESTION DE TRANSPORTES PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 513,
    parentId: 189,
    name: "FRANCISCO JESUS ALVAREZ RAZO",
    department: "BI COMMERCIAL PERFOR. MGNT & MKT INTEL",
    positionName: "ANALISTA DESEMPEÑO COMERCIAL PLENO",
    imageName: 33786
, globalDepartment: ""  },
  {
    id: 514,
    parentId: 551,
    name: "ROMAN HERNANDEZ VALLEJO",
    department: "BI HDPE PRODUCTION II",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 515,
    parentId: 313,
    name: "ELISEO ROJAS CRUZ",
    department: "BI PRODUCTION SOUTH SERVICES",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 516,
    parentId: 562,
    name: "JORGE HUMBERTO RODRIGUEZ NATAREN",
    department: "BI HDPE PRODUCTION IX",
    positionName: "OPERADOR III",
    imageName: 29968
, globalDepartment: ""  },
  {
    id: 517,
    parentId: 581,
    name: "MOISES CONRADO GALVAN UTRERA",
    department: "BI HDPE PRODUCTION",
    positionName: "SUPERVISOR ALMACEN",
    imageName: 30803
, globalDepartment: ""  },
  {
    id: 518,
    parentId: 587,
    name: "JOSE CARLOS LUNA FLORES",
    department: "BI FINANCIAL PLANNING AND RISKS",
    positionName: "ANALISTA PLANEACION FINANCIERA Y RIES SR",
    imageName: 30965
, globalDepartment: ""  },
  {
    id: 519,
    parentId: 493,
    name: "OSVALDO MARTINEZ MAGANA",
    department: "BI HDPE PRODUCTION II",
    positionName: "OPERADOR III",
    imageName: 30359
, globalDepartment: ""  },
  {
    id: 520,
    parentId: 298,
    name: "LUIS ANGEL BAUTISTA RAMOS",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 521,
    parentId: 505,
    name: "JULIAN SANCHEZ MORALES",
    department: "RELIABILITY",
    positionName: "INGENIERO MECANICO JUNIOR",
    imageName: 31487
, globalDepartment: ""  },
  {
    id: 522,
    parentId: 171,
    name: "SOFIA LORENA MACIAS GOMEZ",
    department: "BI INTERNAL COMMUNICATION",
    positionName: "ANALISTA COMUNICACION INTERNA SENIOR",
    imageName: 32152
, globalDepartment: ""  },
  {
    id: 523,
    parentId: 125,
    name: "SALVADOR SANCHEZ SANDOVAL",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: 30270
, globalDepartment: ""  },
  {
    id: 524,
    parentId: 130,
    name: "JOSE FRANCISCO GOMEZ BERNAL",
    department: "BI MAINTENANCE",
    positionName: "INGENIERO MANTENIMIENTO PLENO",
    imageName: 30268
, globalDepartment: ""  },
  {
    id: 525,
    parentId: 352,
    name: "LUIS ANTONIO GOMEZ MARTINEZ",
    department: "AUTOMATION MEXICO",
    positionName: "INGENIERO AUTOMATIZACION JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 526,
    parentId: 495,
    name: "OSVALDO ARROYO RAYO",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA JUNIOR",
    imageName: 32260
, globalDepartment: ""  },
  {
    id: 527,
    parentId: 499,
    name: "ANGEL BENIGNO ARIAS HERNANDEZ",
    department: "EMERGENCIES",
    positionName: "TECNICO CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 528,
    parentId: 615,
    name: "RAUL ZAVALA VENTURA",
    department: "BI MAINTENANCE NORTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 529,
    parentId: 150,
    name: "JONATHAN RAMIREZ HERNANDEZ",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 530,
    parentId: 444,
    name: "ERICK HERRERA DOMINGUEZ",
    department: "BI HDPE PRODUCTION VI",
    positionName: "OPERADOR III",
    imageName: 32265
, globalDepartment: ""  },
  {
    id: 531,
    parentId: 678,
    name: "JOSE EDUARDO BARTOLO DECEANO",
    department: "BI LDPE PRODUCTION II",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 532,
    parentId: 284,
    name: "SAUL BETANCOURT GOMEZ",
    department: "BI CUSTOMER SERVICES EM",
    positionName: "ANALISTA SERVICIO AL CLIENTE ME PLENO",
    imageName: 30442
, globalDepartment: ""  },
  {
    id: 533,
    parentId: 402,
    name: "ELPIDIO HERNANDEZ BASURTO",
    department: "BI MAINTENANCE SOUTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: 32274
, globalDepartment: ""  },
  {
    id: 534,
    parentId: 330,
    name: "LUIS ALBERTO CARDOSO NUNEZ",
    department: "BI PRODUCTION NORTH SERVICES VI",
    positionName: "OPERADOR III",
    imageName: 32277
, globalDepartment: ""  },
  {
    id: 535,
    parentId: 332,
    name: "CRISTIAN ALEXIS SANCHEZ CALES",
    department: "BI TECHNICHAL LABORATORY",
    positionName: "INGENIERO LABORATORIO JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 536,
    parentId: 148,
    name: "HUR CRUZ MARTINEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "SUPERVISOR MANTENIMIENTO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 537,
    parentId: 624,
    name: "YAHAYRA SELENE AMARO LARA",
    department: "SERVICES AND CONTRACTS",
    positionName: "ANALISTA CONTRATOS Y SERVICIOS PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 538,
    parentId: 162,
    name: "DAVID ARI GUAJARDO GALINDO",
    department: "BI STRATEGIC RAW MATERIAL AND ENGERGY",
    positionName: "ESPECIALISTA DESARROLLO DE NEGOCIOS",
    imageName: 32751
, globalDepartment: ""  },
  {
    id: 539,
    parentId: 632,
    name: "JESUS EDUARDO SOTELO PARADA",
    department: "BI LOGISTIC PERFORMANCE MANAGEMENT",
    positionName: "ANALISTA GESTION DESEMPEÑO LOGISTICO PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 540,
    parentId: 203,
    name: "RICARDO SALDIVAR MORAGUES",
    department: "LEGAL & CORPORATE GOVERNANCE",
    positionName: "ABOGADO ESPECIALISTA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 541,
    parentId: 632,
    name: "MOISES SANCHEZ MIRANDA",
    department: "BI LOGISTIC CONTRACTS",
    positionName: "COORDINADOR CONTRATOS",
    imageName: 32626
, globalDepartment: ""  },
  {
    id: 542,
    parentId: 144,
    name: "ADRIAN HERNANDEZ LOPEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 543,
    parentId: 648,
    name: "GABRIELA BERENICE FISCAL ORDONEZ",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "OPERADOR IV",
    imageName: 26914
, globalDepartment: ""  },
  {
    id: 544,
    parentId: 169,
    name: "LORENA VILLASENOR SANCHEZ",
    department: "DISTRIBUTION AND EXPORTS",
    positionName: "GERENTE DE CUENTA III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 545,
    parentId: 34,
    name: "IVAN MANUEL PEREZ GRACIDA",
    department: "BI MAINTENANCE SOUTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 546,
    parentId: 677,
    name: "RENE REYES BAUTISTA",
    department: "BI HDPE POLYETHYLENE MAINTENANCE II",
    positionName: "SUPERVISOR MECANICO",
    imageName: 26267
, globalDepartment: ""  },
  {
    id: 547,
    parentId: 35,
    name: "LUIS FELIPE GONZALEZ CRUZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 548,
    parentId: 52,
    name: "LUIS DANIEL SALAYA DE LOS SANTOS",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 549,
    parentId: 227,
    name: "YARISBET HERNANDEZ GUARNEROS",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: 26933
, globalDepartment: ""  },
  {
    id: 550,
    parentId: 479,
    name: "JOSE ARTURO CAMORLINGA SOTO",
    department: "BI PRODUCTION NORTH SERVICES",
    positionName: "INGENIERO PRODUCCION JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 551,
    parentId: 581,
    name: "ULISES VAZQUEZ MADARIAGA",
    department: "BI HDPE PRODUCTION II",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 27016
, globalDepartment: ""  },
  {
    id: 552,
    parentId: 227,
    name: "ANGEL VILLA CONTRERAS",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 553,
    parentId: 330,
    name: "PAUL ZETINA AGUILAR",
    department: "BI PRODUCTION NORTH SERVICES VI",
    positionName: "OPERADOR V",
    imageName: 26448
, globalDepartment: ""  },
  {
    id: 554,
    parentId: 615,
    name: "GUADALUPE CRUZ CRUZ",
    department: "BI MAINTENANCE NORTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO IV",
    imageName: 26901
, globalDepartment: ""  },
  {
    id: 555,
    parentId: 673,
    name: "JOSE GUILLERMO VILLATORO CASTILLEJOS",
    department: "BI IMPORTED ETHANE OPERATION",
    positionName: "TECNICO DE OPERACION",
    imageName: 27052
, globalDepartment: ""  },
  {
    id: 556,
    parentId: 500,
    name: "NANCY EVELYN ORTEGA RIVERA",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "INGENIERO DE PROYECTOS SENIOR",
    imageName: 28018
, globalDepartment: ""  },
  {
    id: 557,
    parentId: 140,
    name: "ZURISADAI MARTINEZ LEAL",
    department: "BI P&O PEOPLE SERVICES",
    positionName: "ANALISTA FACILITIES PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 558,
    parentId: 646,
    name: "DANIEL ESAU LARA TORRES",
    department: "BI HDPE PRODUCTION I",
    positionName: "OPERADOR V",
    imageName: 26951
, globalDepartment: ""  },
  {
    id: 559,
    parentId: 505,
    name: "LIBIA ZULEMA WILSON SANCHEZ",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: 27055
, globalDepartment: ""  },
  {
    id: 560,
    parentId: 52,
    name: "IRVING RENE ZAMUDIO MATIAS",
    department: "BI HDPE PRODUCTION VIII",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 561,
    parentId: 236,
    name: "MIGUEL ANGEL LUNA DIAZ",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 562,
    parentId: 581,
    name: "FERNANDO FLORES MUNOZ",
    department: "BI HDPE PRODUCTION IX",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 28447
, globalDepartment: ""  },
  {
    id: 563,
    parentId: 694,
    name: "JORGE ARELLANO FUNES",
    department: "BI CREDIT",
    positionName: "COORDINADOR DE CREDITO",
    imageName: 28694
, globalDepartment: ""  },
  {
    id: 564,
    parentId: 499,
    name: "GABRIEL SANCHEZ CRUZ",
    department: "EMERGENCIES",
    positionName: "TECNICO CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 565,
    parentId: 204,
    name: "BLANCA DELIA REYES CONTRERAS",
    department: "BI COMMERCIAL - PE FLEXIBLES",
    positionName: "GERENTE DE CUENTA III",
    imageName: 26346
, globalDepartment: ""  },
  {
    id: 566,
    parentId: 150,
    name: "SUSY ESDREI PACHECO SANTOS",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 567,
    parentId: 444,
    name: "RAFAEL PALOMEC RAMIREZ",
    department: "BI HDPE PRODUCTION VI",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 568,
    parentId: 671,
    name: "ADELA GUADALUPE PULIDO RUIZ",
    department: "LABORATORY I",
    positionName: "TECNICO LABORATORISTA SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 569,
    parentId: 180,
    name: "NAYELI GRISEL TORRES SANCHEZ",
    department: "OPERATIONS IT MEXICO",
    positionName: "COORDINADOR OPERACION Y SEGURIDAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 570,
    parentId: 0,
    name: "JORGE LUIS RIOS OROPEZA",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO PLANEACION PLENO",
    imageName: 28589
, globalDepartment: ""  },
  {
    id: 571,
    parentId: 276,
    name: "VICTOR MANUEL ARIAS RAMIREZ",
    department: "BI MAINTENANCE NORTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 572,
    parentId: 475,
    name: "ELIAS RAFAEL ROJAS CARDOZA",
    department: "BI MAINTENANCE NORTH SERVICES III",
    positionName: "SUPERVISOR MECANICO ESTATICO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 573,
    parentId: 231,
    name: "LANDY YANET CASTRO SANCHEZ",
    department: "SERVICES AND CONTRACTS I",
    positionName: "ANALISTA CONTRATOS Y SERVICIOS PLENO",
    imageName: 29065
, globalDepartment: ""  },
  {
    id: 574,
    parentId: 495,
    name: "BRIANDA ZULEIMA UCHA RODRIGUEZ",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA JUNIOR",
    imageName: 28788
, globalDepartment: ""  },
  {
    id: 575,
    parentId: 495,
    name: "ADRIANA RODRIGUEZ ORTIZ",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA PLENO",
    imageName: 28787
, globalDepartment: ""  },
  {
    id: 576,
    parentId: 500,
    name: "DIANA MARIEL DELGADO MENDEZ",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "INGENIERO CONTROL DE PROYECTOS SENIOR",
    imageName: 29336
, globalDepartment: ""  },
  {
    id: 577,
    parentId: 495,
    name: "JEMIMA BERENICE RAMIREZ CASTANEDA",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 578,
    parentId: 171,
    name: "JAHARA ELIZABETH COOL CARRILLO",
    department: "BI INTERNAL COMMUNICATION",
    positionName: "ANALISTA COMUNICACION INTERNA JUNIOR",
    imageName: 29102
, globalDepartment: ""  },
  {
    id: 579,
    parentId: 562,
    name: "GONZALO GARCIA GOMEZ",
    department: "BI HDPE PRODUCTION IX",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 580,
    parentId: 499,
    name: "JOB ALBERTO LOPEZ RAMIREZ",
    department: "EMERGENCIES",
    positionName: "TECNICO CONTRA INCENDIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 581,
    parentId: 342,
    name: "ROCIO DE LOURDES BARRADAS DELFIN",
    department: "BI HDPE PRODUCTION",
    positionName: "SUPERINTENDENTE PRODUCCION",
    imageName: 25520
, globalDepartment: ""  },
  {
    id: 582,
    parentId: 666,
    name: "LUCIA NATALI HERRERA UTRERA",
    department: "BI ETHYLENE MAINTENANCE",
    positionName: "SUPERINTENDENTE MANTENIMIENTO",
    imageName: 25094
, globalDepartment: ""  },
  {
    id: 583,
    parentId: 481,
    name: "LIZETE ESPANA RODEA",
    department: "BI QUALITY",
    positionName: "ESPECIALISTA CALIDAD",
    imageName: 24850
, globalDepartment: ""  },
  {
    id: 584,
    parentId: 682,
    name: "ARTURO VARGAS PINEDA",
    department: "BRASKEM IDESA",
    positionName: "CHOFER",
    imageName: 24643
, globalDepartment: ""  },
  {
    id: 585,
    parentId: 0,
    name: "PEDRO ANTONIO ABARCA CARRANZA",
    department: "PROJECT",
    positionName: "INGENIERO ESPECIALISTA",
    imageName: 22744
, globalDepartment: ""  },
  {
    id: 586,
    parentId: 0,
    name: "CARLOS ERNESTO ANGELES NOVOA",
    department: "GLOBAL MRO AND CAPITAL, USA AND MX",
    positionName: "GERENTE MRO Y SERVICIOS",
    imageName: 23133
, globalDepartment: ""  },
  {
    id: 587,
    parentId: 351,
    name: "ALEJANDRA IVONNE GONZALEZ VENANCIO",
    department: "BI FINANCIAL PLANNING AND RISKS",
    positionName: "COORDINADOR PLANEACION FINANCIERA Y RESGOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 588,
    parentId: 615,
    name: "GUILLERMO ANTONIO LUNA DIAZ",
    department: "BI MAINTENANCE NORTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 589,
    parentId: 812,
    name: "CARLOS ISAAC CORTES HERNANDEZ",
    department: "BI ETHYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 590,
    parentId: 284,
    name: "DANIELA OROZCO SANCHEZ",
    department: "BI CUSTOMER SERVICES EM",
    positionName: "ANALISTA SERVICIO AL CLIENTE ME PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 591,
    parentId: 812,
    name: "BERSAIN GARCIA TRINIDAD",
    department: "BI ETHYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 592,
    parentId: 298,
    name: "EMMANUEL ALONSO HERNANDEZ",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "OPERADOR I",
    imageName: 33690
, globalDepartment: ""  },
  {
    id: 593,
    parentId: 493,
    name: "ELIU ZEMPOALTECATL ROMERO",
    department: "BI HDPE PRODUCTION IV",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 594,
    parentId: 200,
    name: "ROBERTO FERNANDEZ GARCIA",
    department: "BI PEOPLE SERVICES",
    positionName: "ASISTENTE DE SERVICIOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 595,
    parentId: 162,
    name: "JOSE CRISTIAN CONTRERAS CASAS",
    department: "BI STRATEGIC RAW MATERIAL AND ENGERGY",
    positionName: "ESPECIALISTA INSUMOS ESTRATEGICOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 596,
    parentId: 167,
    name: "ARMANDO DIAZ DIAZ ARELLANO",
    department: "BI PROCESSES",
    positionName: "ESPECIALISTA DE PROCESOS CS",
    imageName: 33448
, globalDepartment: ""  },
  {
    id: 597,
    parentId: 225,
    name: "ROXANA DELILAH ESPINOSA MARTINEZ",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "ANALISTA LOGISTICA SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 598,
    parentId: 14,
    name: "HORACIO JANTES GUIJOSA",
    department: "BUSINESS SOLUTION & PROJECTS",
    positionName: "ANALISTA PROYECTOS SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 599,
    parentId: 499,
    name: "IRVIN JOSEPH ESCOBAR AQUINO",
    department: "EMERGENCIES",
    positionName: "LIDER DE EMERGENCIAS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 600,
    parentId: 63,
    name: "IVAN ALBERTO PIMENTEL ROSAS",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 601,
    parentId: 493,
    name: "JUAN DIEGO ZILLI DOMINGUEZ",
    department: "BI HDPE PRODUCTION IV",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 602,
    parentId: 444,
    name: "ALONDRA GARCIA AGUILAR",
    department: "BI HDPE PRODUCTION IX",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 603,
    parentId: 70,
    name: "JOSE ALEXANDRO VALLARTA ECHEVERRIA",
    department: "BI MAINTENANCE SOUTH SERVICES III",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: 30977
, globalDepartment: ""  },
  {
    id: 604,
    parentId: 0,
    name: "DIANA BENEFLORA GONZALEZ ARVIZU",
    department: "CONTINUOUS IMPROVEMENT & GPS",
    positionName: "ANALISTA MEJORA CONTINUA PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 605,
    parentId: 52,
    name: "OCTAVIO FUENTES GALMICHE",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 606,
    parentId: 0,
    name: "ROXANA HERNANDEZ DUQUE",
    department: "BI MAINTENANCE PLANNING",
    positionName: "ANALISTA MANTENIMIENTO PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 607,
    parentId: 227,
    name: "HUMBERTO SANTIAGO RAMIREZ",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 608,
    parentId: 465,
    name: "GABRIEL GONZALEZ LEON",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 609,
    parentId: 484,
    name: "RICHARD IVAN SOLIS ALOR",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 610,
    parentId: 52,
    name: "MARCOS ANTONIO MONTALVO",
    department: "BI ETHYLENE PRODUCTION I",
    positionName: "OPERADOR III",
    imageName: 29855
, globalDepartment: ""  },
  {
    id: 611,
    parentId: 508,
    name: "LEVI GUZMAN CAYETANO",
    department: "QUALITY MEXICO",
    positionName: "INGENIERO CALIDAD PLENO",
    imageName: 30294
, globalDepartment: ""  },
  {
    id: 612,
    parentId: 55,
    name: "IVONNE FLORES ALVAREZ",
    department: "MATERIALS, SERVICES AND CONTRACTS",
    positionName: "ANALISTA CONTRATOS Y SERVICIOS JUNIOR",
    imageName: 30725
, globalDepartment: ""  },
  {
    id: 613,
    parentId: 418,
    name: "TANYA CRISOSTOMO ACOSTA",
    department: "BI HEALTH, ENVIRONMENT AND SAFETY",
    positionName: "ENFERMERA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 614,
    parentId: 332,
    name: "YESENIA PEREZ CARRERA",
    department: "BI TECHNICHAL LABORATORY",
    positionName: "INGENIERO LABORATORIO PLENO",
    imageName: 30120
, globalDepartment: ""  },
  {
    id: 615,
    parentId: 475,
    name: "ANTONIO DE JESUS RAMON PORTUGAL",
    department: "BI MAINTENANCE NORTH SERVICES IV",
    positionName: "SUPERVISOR MECANICO",
    imageName: 32078
, globalDepartment: ""  },
  {
    id: 616,
    parentId: 563,
    name: "HANNY DANIELA MEZA RODRIGUEZ",
    department: "BI CREDIT",
    positionName: "ANALISTA DE CREDITO JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 617,
    parentId: 895,
    name: "KARLA GRISSEL QUINTERO LOPEZ",
    department: "BI TREASURY I",
    positionName: "ANALISTA TESORERIA PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 618,
    parentId: 70,
    name: "ELIAS DIAZ JACINTO",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO III",
    imageName: 32437
, globalDepartment: ""  },
  {
    id: 619,
    parentId: 14,
    name: "ALIX ANGIE CRUZ VELAZQUEZ",
    department: "BUSINESS SOLUTION & PROJECTS",
    positionName: "ANALISTA PROYECTOS SENIOR",
    imageName: 32701
, globalDepartment: ""  },
  {
    id: 620,
    parentId: 103,
    name: "ALDO FERMIN CASTILLO TERRES",
    department: "BI TRANSPORTATION MANAGEMENT",
    positionName: "ANALISTA GESTION DE TRANSPORTES PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 621,
    parentId: 465,
    name: "MARIA CRISTINA MORALES RODRIGUEZ",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR IV",
    imageName: 26420
, globalDepartment: ""  },
  {
    id: 622,
    parentId: 130,
    name: "CRISTINA ESCUDERO DOLORES",
    department: "BI MAINTENANCE",
    positionName: "INGENIERO PLANEADOR DE PAROS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 623,
    parentId: 562,
    name: "JORGE LUIS FERNANDEZ CRUZ",
    department: "BI HDPE PRODUCTION IX",
    positionName: "OPERADOR IV",
    imageName: 26913
, globalDepartment: ""  },
  {
    id: 624,
    parentId: 586,
    name: "FRANCISCO JAVIER MEXICANO FELIPE",
    department: "SERVICES AND CONTRACTS",
    positionName: "COORDINADOR CONTRATOS Y SERVICIOS",
    imageName: 27102
, globalDepartment: ""  },
  {
    id: 625,
    parentId: 648,
    name: "OLGA REYES CAMPOS",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 626,
    parentId: 500,
    name: "ALHELI DE JESUS DIAZ PERALTA",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "INGENIERO CALIDAD DE PROYECTOS JUNIOR",
    imageName: 27214
, globalDepartment: ""  },
  {
    id: 627,
    parentId: 78,
    name: "MIGUEL ANGEL MONTER JUAREZ",
    department: "BI ETHYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 628,
    parentId: 52,
    name: "ANA CRISTINA GARDUZA LARA",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 629,
    parentId: 330,
    name: "JOSE JORGE ROSALES ABDALA",
    department: "BI PRODUCTION NORTH SERVICES VI",
    positionName: "OPERADOR IV",
    imageName: 27003
, globalDepartment: ""  },
  {
    id: 630,
    parentId: 277,
    name: "EDWIN AROLDO OVALLE HERNANDEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 631,
    parentId: 418,
    name: "ANA PAULINA DEMENEGHI CALATAYUD",
    department: "BI HEALTH, ENVIRONMENT AND SAFETY",
    positionName: "INGENIERO AMBIENTAL PLENO",
    imageName: 26596
, globalDepartment: ""  },
  {
    id: 632,
    parentId: 690,
    name: "MIGUEL ANGEL RIOS VALENCIA",
    department: "BI PLANNING AND LOGISTIC CONTRACTS",
    positionName: "GERENTE CONRATOS Y PLANEACION LOGISTICA",
    imageName: 27397
, globalDepartment: ""  },
  {
    id: 633,
    parentId: 322,
    name: "RODOLFO ANTONIO CRUZ TRUJILLO",
    department: "BI PRODUCTION NORTH SERVICES IV",
    positionName: "OPERADOR III",
    imageName: 26905
, globalDepartment: ""  },
  {
    id: 634,
    parentId: 551,
    name: "GENER FRANCISCO VILLALOBOS DOMINGUEZ",
    department: "BI HDPE PRODUCTION II",
    positionName: "OPERADOR V",
    imageName: 27050
, globalDepartment: ""  },
  {
    id: 635,
    parentId: 484,
    name: "MIGUEL VELASCO RAMIREZ",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 636,
    parentId: 648,
    name: "JOEL VICENTE HERNANDEZ",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "OPERADOR IV",
    imageName: 27049
, globalDepartment: ""  },
  {
    id: 637,
    parentId: 642,
    name: "ADRIANA CISNEROS LOPEZ",
    department: "BI CUSTOMER SERVICES IM",
    positionName: "ANALISTA SERVICIO AL CLIENTE MI PLENO",
    imageName: 27634
, globalDepartment: ""  },
  {
    id: 638,
    parentId: 298,
    name: "LUIS ALBERTO CASTILLO LOPEZ",
    department: "BI PRODUCTION SOUTH SERVICES IV",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 639,
    parentId: 484,
    name: "IRVING CLAUDIO JUAREZ VILLA",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 640,
    parentId: 0,
    name: "JAVIER LARA CRUZ",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO PLANEACION JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 641,
    parentId: 505,
    name: "GIBRAN ALFREDO LARA HERNANDEZ",
    department: "RELIABILITY I",
    positionName: "SUPERVISOR MANTENIMIENTO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 642,
    parentId: 167,
    name: "RENE HERNANDEZ ZEPEDA",
    department: "BI CUSTOMER SERVICES IM",
    positionName: "COORDINADOR SERVICIO AL CLIENTE MI",
    imageName: 28683
, globalDepartment: ""  },
  {
    id: 643,
    parentId: 666,
    name: "ALAN SISCO VITE LARA",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE",
    positionName: "INGENIERO MANTENIMIENTO PLENO",
    imageName: 27054
, globalDepartment: ""  },
  {
    id: 644,
    parentId: 52,
    name: "JUAN LOPEZ AQUINO",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 645,
    parentId: 404,
    name: "LORENZO DE LA CRUZ RIOS",
    department: "BI HDPE PRODUCTION VII",
    positionName: "OPERADOR IV",
    imageName: 26468
, globalDepartment: ""  },
  {
    id: 646,
    parentId: 581,
    name: "ULISES GONGORA FACUNDO",
    department: "BI HDPE PRODUCTION X",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 647,
    parentId: 493,
    name: "JOSUE MARTINEZ MIGUEL",
    department: "BI HDPE PRODUCTION IV",
    positionName: "OPERADOR IV",
    imageName: 26962
, globalDepartment: ""  },
  {
    id: 648,
    parentId: 474,
    name: "FRANCISCO CHRISTIAN ANTONIO LASTRA",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 26169
, globalDepartment: ""  },
  {
    id: 649,
    parentId: 416,
    name: "IRINA EKATERINA ALCANTARA AISPURO",
    department: "BI TAX",
    positionName: "ANALISTA IMPUESTOS SENIOR",
    imageName: 26347
, globalDepartment: ""  },
  {
    id: 650,
    parentId: 474,
    name: "TAURINO GUERRERO ORTEGA",
    department: "BI ETHYLENE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: 26485
, globalDepartment: ""  },
  {
    id: 651,
    parentId: 231,
    name: "MONICA FABIOLA AUDELO RIOS",
    department: "SERVICES AND CONTRACTS I",
    positionName: "ANALISTA CONTRATOS Y SERVICIOS SENIOR",
    imageName: 28104
, globalDepartment: ""  },
  {
    id: 652,
    parentId: 0,
    name: "KAREN SUSANA POSADA HERNANDEZ",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO PLANEACION PLENO",
    imageName: 26985
, globalDepartment: ""  },
  {
    id: 653,
    parentId: 484,
    name: "CARLOS ALBERTO AGUILAR HERNANDEZ",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 654,
    parentId: 222,
    name: "LUIS ALBERTO CAN AZAMAR",
    department: "BI LDPE PRODUCTION II",
    positionName: "OPERADOR IV",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 655,
    parentId: 418,
    name: "DAGOBERTO PALACIOS BALCAZAR",
    department: "BI HEALTH, ENVIRONMENT AND SAFETY",
    positionName: "INGENIERO HIGIENISTA JUNIOR",
    imageName: 28517
, globalDepartment: ""  },
  {
    id: 656,
    parentId: 14,
    name: "ERICK MATEOS CRUZ",
    department: "BUSINESS SOLUTION & PROJECTS",
    positionName: "ANALISTA PROYECTOS SENIOR",
    imageName: 27543
, globalDepartment: ""  },
  {
    id: 657,
    parentId: 148,
    name: "ROSARIO SANTOS AVALOS",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "SUPERVISOR ELECTRICO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 658,
    parentId: 581,
    name: "LUIS ANTONIO RONQUILLO SAENZ",
    department: "BI HDPE PRODUCTION",
    positionName: "INGENIERO DE EFECTIVIDAD OPERACIONAL",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 659,
    parentId: 69,
    name: "ALEJANDRO GUDINO MARTINEZ",
    department: "BI COMMERCIAL - PE RIGID",
    positionName: "GERENTE DE CUENTA III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 660,
    parentId: 163,
    name: "VIRIDIANA CARMONA ROMERO",
    department: "BI INDUSTRIAL PERFORMANCE MANAGEMENT",
    positionName: "ANALISTA DESEMPEÑO INDUSTRIAL PLENO",
    imageName: 28797
, globalDepartment: ""  },
  {
    id: 661,
    parentId: 284,
    name: "KARLA CASTRO RODRIGUEZ",
    department: "BI CUSTOMER SERVICES EM",
    positionName: "ANALISTA SERVICIO AL CLIENTE ME SENIOR",
    imageName: 29113
, globalDepartment: ""  },
  {
    id: 662,
    parentId: 389,
    name: "ELVIRA RAMIREZ ANTONIO",
    department: "BI INDUSTRIAL SAFETY",
    positionName: "INGENIERO SEGURIDAD INDUSTRIAL PLENO",
    imageName: 29117
, globalDepartment: ""  },
  {
    id: 663,
    parentId: 146,
    name: "ROBERTO JESUS PRISCILIANO MENDOZA RODRIGUEZ",
    department: "INDUSTRIAL MEXICO",
    positionName: "COORDINADOR EFECTIVIDAD OPERACIONAL",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 664,
    parentId: 300,
    name: "VICTOR CESAR PACHECO LOAEZA",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 665,
    parentId: 0,
    name: "MONSERRAT LANDA PEREZ",
    department: "PRODUCT STEWARDSHIP NAM",
    positionName: "INGENIERO ADMINISTRACION DEL PRODUCTO SENIOR",
    imageName: 29158
, globalDepartment: ""  },
  {
    id: 666,
    parentId: 170,
    name: "ALFREDO VALDIVIA GALLEGOS",
    department: "BI MAINTENANCE",
    positionName: "GERENTE MANTENIMIENTO",
    imageName: 24872
, globalDepartment: ""  },
  {
    id: 667,
    parentId: 343,
    name: "CECILIA LORMENDEZ LOPEZ",
    department: "BI SOCIAL RESPONSIBILITY",
    positionName: "COORDINADOR RESPONSABILIDAD SOCIAL",
    imageName: 24154
, globalDepartment: ""  },
  {
    id: 668,
    parentId: 670,
    name: "RODRIGO MITZ RODRIGUEZ",
    department: "BI LDPE PRODUCTION",
    positionName: "INGENIERO PRODUCCION SENIOR",
    imageName: 25736
, globalDepartment: ""  },
  {
    id: 669,
    parentId: 670,
    name: "ROGELIO CRUZ LOPEZ",
    department: "BI LDPE PRODUCTION IV",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 25738
, globalDepartment: ""  },
  {
    id: 670,
    parentId: 342,
    name: "XICOTENCATL ZAVALA MARTINEZ",
    department: "BI LDPE PRODUCTION",
    positionName: "SUPERINTENDENTE PRODUCCION",
    imageName: 24716
, globalDepartment: ""  },
  {
    id: 671,
    parentId: 170,
    name: "FEDERICO FRANCISCO SANTOS SANCHEZ",
    department: "INDUSTRIAL MEXICO",
    positionName: "GERENTE MANTENIMIENTO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 672,
    parentId: 691,
    name: "YANET CARMEN LOPEZ ZARATE",
    department: "FINANCE",
    positionName: "ASISTENTE EJECUTIVA",
    imageName: 25751
, globalDepartment: ""  },
  {
    id: 673,
    parentId: 690,
    name: "SANDRA ANGELICA CARDOSO PALMERIN",
    department: "BI IMPORTED ETHANE OPERATION",
    positionName: "GERENTE DE OPERACION ETANO IMPORTADO",
    imageName: 24978
, globalDepartment: ""  },
  {
    id: 674,
    parentId: 581,
    name: "ANGEL JESEF VITE LARA",
    department: "BI HDPE PRODUCTION",
    positionName: "INGENIERO PRODUCCION SENIOR",
    imageName: 25098
, globalDepartment: ""  },
  {
    id: 675,
    parentId: 170,
    name: "CARLOS VILLASENOR PIMENTEL",
    department: "BI INDUSTRIAL EFFECTIVENESS",
    positionName: "GERENTE PROYECTOS ESTRATEGICOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 676,
    parentId: 37,
    name: "MONICA CERVANTES AMEZQUITA",
    department: "BI COMPENSATION AND BENEFITS",
    positionName: "GERENTE REMUNERACION Y BENEFICIOS",
    imageName: 25635
, globalDepartment: ""  },
  {
    id: 677,
    parentId: 666,
    name: "AQUILINO MONTANO RUIZ",
    department: "BI MAINTENANCE SOUTH SERVICES",
    positionName: "SUPERINTENDENTE MANTENIMIENTO",
    imageName: 25643
, globalDepartment: ""  },
  {
    id: 678,
    parentId: 670,
    name: "OSIRIS FABIAN BARROSO MARTINEZ",
    department: "BI LDPE PRODUCTION III",
    positionName: "SUPERVISOR PRODUCCION",
    imageName: 25640
, globalDepartment: ""  },
  {
    id: 679,
    parentId: 189,
    name: "HILLARY RAMIREZ CARMONA",
    department: "BI COMMERCIAL PERFOR. MGNT & MKT INTEL",
    positionName: "ANALISTA DESEMPEÑO COMERCIAL JUNIOR",
    imageName: 34692
, globalDepartment: ""  },
  {
    id: 680,
    parentId: 167,
    name: "CARLA CORTES GONZALEZ",
    department: "BI PROCESSES",
    positionName: "ANALISTA PROCESOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 681,
    parentId: 103,
    name: "INAKI MORTERA PASCUAL",
    department: "BI TRANSPORTATION MANAGEMENT",
    positionName: "ANALISTA GESTION DE TRANSPORTES JUNIOR",
    imageName: 34808
, globalDepartment: ""  },
  {
    id: 682,
    parentId: 0,
    name: "STEFAN LANNA LEPECKI",
    department: "BRASKEM IDESA",
    positionName: "DIRECTOR GENERAL",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 683,
    parentId: 581,
    name: "MARCOS ANDRES REYES FRANCISCO",
    department: "BI HDPE PRODUCTION",
    positionName: "TECNICO DE OPERACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 684,
    parentId: 465,
    name: "JOSE LUIS CHAVEZ GARCIA",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR IV",
    imageName: 26460
, globalDepartment: ""  },
  {
    id: 685,
    parentId: 484,
    name: "ROSA ANDREA CELAYA IZQUIERDO",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR III",
    imageName: 31222
, globalDepartment: ""  },
  {
    id: 686,
    parentId: 52,
    name: "JORGE LUIS GUTIERREZ CABRERA",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "OPERADOR IV",
    imageName: 27949
, globalDepartment: ""  },
  {
    id: 687,
    parentId: 678,
    name: "JORGE ALBERTO LOPEZ RUIZ",
    department: "BI LDPE PRODUCTION III",
    positionName: "OPERADOR V",
    imageName: 26956
, globalDepartment: ""  },
  {
    id: 688,
    parentId: 484,
    name: "JESUS ALBERTO JIMENEZ VARGAS",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR V",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 689,
    parentId: 691,
    name: "EDUARDO LOPES JUNQUEIRA",
    department: "BI MANAGEMENT PERFORMANCE & MKT INTEL",
    positionName: "GERENTE GESTION DESEMPEÑO E INTELIGENCIA DE MERCADO",
    imageName: 33660
, globalDepartment: ""  },
  {
    id: 690,
    parentId: 682,
    name: "MARCIO DE CAMPOS MARINO",
    department: "SUPPLY CHAIN MEXICO",
    positionName: "DIRECTOR DE CADENA DE SUMINISTRO",
    imageName: 32706
, globalDepartment: ""  },
  {
    id: 691,
    parentId: 682,
    name: "DANILO DIAS GARCEZ DE CASTRO DORIA",
    department: "FINANCE",
    positionName: "DIRECTOR FINANCIERO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 692,
    parentId: 682,
    name: "ALFREDO JOSE PRINCE",
    department: "BRASKEM IDESA",
    positionName: "DIRECTOR COMERCIAL",
    imageName: 35444
, globalDepartment: ""  },
  {
    id: 693,
    parentId: 682,
    name: "CLEANTHO DE PAIVA LEITE FILHO",
    department: "COMMS & MARKETING AND EXTERNAL AFFAIRS",
    positionName: "DIRECTOR RELACIONES INSTITUCIONALES",
    imageName: 33297
, globalDepartment: ""  },
  {
    id: 694,
    parentId: 691,
    name: "JOSE MAURICIO NOVIS FIGUEIREDO",
    department: "BI CREDIT, COLLECTION & TREASURY",
    positionName: "GERENTE FINANCIERO",
    imageName: 32883
, globalDepartment: ""  },
  {
    id: 695,
    parentId: 692,
    name: "WARNEY JOSE JUNS AIALA",
    department: "MARKET DEVELOPMENT",
    positionName: "GERENTE DE VENTAS",
    imageName: 32887
, globalDepartment: ""  },
  {
    id: 696,
    parentId: 692,
    name: "ANTONIO AUGUSTO FORGIARINI DE QUADRO",
    department: "PRODUCT AND MARKET INTELIGENCE",
    positionName: "GERENTE DE PRODUCTO",
    imageName: 32885
, globalDepartment: ""  },
  {
    id: 697,
    parentId: 14,
    name: "JESUS URENA ALCANTARA",
    department: "BUSINESS SOLUTION & PROJECTS",
    positionName: "ANALISTA PROYECTOS SENIOR",
    imageName: 34971
, globalDepartment: ""  },
  {
    id: 698,
    parentId: 14,
    name: "ELVIRA NAKARY SUCRE QUIJADA",
    department: "BUSINESS SOLUTION & PROJECTS",
    positionName: "ANALISTA PROYECTOS SENIOR",
    imageName: 34973
, globalDepartment: ""  },
  {
    id: 699,
    parentId: 125,
    name: "GUSTAVO NORBERTO ALOR SANCHEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 700,
    parentId: 409,
    name: "MARIO ALBERTO MOLINA GALMICHE",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 701,
    parentId: 34,
    name: "ABRAHAM TORRES GONZALEZ",
    department: "BI MAINTENANCE SOUTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 702,
    parentId: 14,
    name: "MELITON MIRANDA MORALES",
    department: "BUSINESS SOLUTION & PROJECTS",
    positionName: "ANALISTA PROYECTOS PLENO",
    imageName: 34972
, globalDepartment: ""  },
  {
    id: 703,
    parentId: 350,
    name: "MONTSERRAT AMPARO MACIAS CANSECO",
    department: "BI COLLECTION",
    positionName: "ANALISTA COBRANZA PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 704,
    parentId: 274,
    name: "MARIANA ELISA REYNOSO INIESTA",
    department: "BI ORGANIZATIONAL DEVELOPMENT",
    positionName: "ANALISTA DESARROLLO ORGANIZACIONAL SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 705,
    parentId: 200,
    name: "MONTSERRAT SANCHEZ RODRIGUEZ",
    department: "BI PEOPLE SERVICES",
    positionName: "ESPECIALISTA DE BENEFICIOS Y SERVICIOS",
    imageName: 35079
, globalDepartment: ""  },
  {
    id: 706,
    parentId: 292,
    name: "CARLOS CRUZ REYES",
    department: "BI ETHYLENE MAINTENANCE IV",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 707,
    parentId: 70,
    name: "JOSE GUADALUPE SALCEDO URRIETA",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 708,
    parentId: 500,
    name: "LUIS ALBERTO FERNANDEZ MARTINEZ",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "INGENIERO DE PROYECTOS JUNIOR",
    imageName: 35059
, globalDepartment: ""  },
  {
    id: 709,
    parentId: 495,
    name: "LIZETH NAYELI GUZMAN PACHECO",
    department: "LABORATORY II",
    positionName: "TECNICO LABORATORISTA JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 710,
    parentId: 276,
    name: "WILLIAMS BAUTISTA GARCIA",
    department: "BI MAINTENANCE NORTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 711,
    parentId: 35,
    name: "CLAUDIO ALEJANDRO CASTILLEJOS MALDONADO",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 712,
    parentId: 78,
    name: "LUIS GERARDO PRIETO VILLAGOMEZ",
    department: "BI ETHYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 713,
    parentId: 259,
    name: "JULIO CESAR HERNANDEZ FLORES",
    department: "BI HDPE PRODUCTION III",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 714,
    parentId: 669,
    name: "JOSIMAR NIZIMURA COPETE",
    department: "BI LDPE PRODUCTION II",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 715,
    parentId: 669,
    name: "CESAR JAVIER SANCHEZ CRUZ",
    department: "BI LDPE PRODUCTION I",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 716,
    parentId: 389,
    name: "SONIA FABIOLA VIVANCO MORENO",
    department: "BI INDUSTRIAL SAFETY",
    positionName: "ANALISTA SEGURIDAD INDUSTRIAL JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 717,
    parentId: 500,
    name: "SERGIO BREMONT RAMIREZ",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "INGENIERO ADMINISTRADOR PROYECTOS PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 718,
    parentId: 389,
    name: "MAYRA LAZARO FERNANDEZ",
    department: "BI INDUSTRIAL SAFETY",
    positionName: "INGENIERO SEGURIDAD INDUSTRIAL JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 719,
    parentId: 298,
    name: "JOSE ANTONIO LAFFONT VILLA",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 720,
    parentId: 484,
    name: "ROBERTO VIVEROS ALVAREZ",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 721,
    parentId: 78,
    name: "FRANCISCO MATEO JIMENEZ",
    department: "BI ETHYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 722,
    parentId: 412,
    name: "JUSTINO TORRES GONZALEZ",
    department: "BI MAINTENANCE NORTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 723,
    parentId: 292,
    name: "LUIS AGUILAR ALMEIDA",
    department: "BI ETHYLENE MAINTENANCE IV",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 724,
    parentId: 409,
    name: "TERESA HERNANDEZ CHAVEZ",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 725,
    parentId: 493,
    name: "ALEJANDRO LOPEZ MANUEL",
    department: "BI HDPE PRODUCTION IV",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 726,
    parentId: 615,
    name: "JOSE ALBERTO GOMEZ HERNANDEZ",
    department: "BI MAINTENANCE NORTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 727,
    parentId: 203,
    name: "RODRIGO JOSE AYALA LARRAZABAL",
    department: "LEGAL & CORPORATE GOVERNANCE",
    positionName: "ABOGADO ESPECIALISTA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 728,
    parentId: 279,
    name: "CARLOS ALBERTO MENDEZ LARA",
    department: "ANALYTICAL AUTOMATION",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 729,
    parentId: 0,
    name: "PEDRO HENRIQUE ARDAIS RAMOS",
    department: "BI PROJECT FINANCE I",
    positionName: "ANALISTA PROJECT FINANCE JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 730,
    parentId: 562,
    name: "MANUEL ANTONIO RUIZ AZAMAR",
    department: "BI HDPE PRODUCTION VII",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 731,
    parentId: 52,
    name: "CARLOS RIOS HERNANDEZ",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 732,
    parentId: 227,
    name: "JUAN MANUEL ROMERO HERNANDEZ",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 733,
    parentId: 225,
    name: "RAQUEL ISAIAS VAZQUEZ",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "ANALISTA LOGISTICA JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 734,
    parentId: 244,
    name: "RUBEN REYES FERNANDEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 735,
    parentId: 330,
    name: "JUAN CARLOS MORALES ESCOBAR",
    department: "BI PRODUCTION NORTH SERVICES VI",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 736,
    parentId: 322,
    name: "JORGE ALBERTO MATEOS OSORIO",
    department: "BI PRODUCTION NORTH SERVICES II",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 737,
    parentId: 0,
    name: "ANA GABRIELA MORENO GOMEZ",
    department: "BI TALENT ATTRACTION",
    positionName: "ANALISTA ATRACCION DE TALENTO PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 738,
    parentId: 277,
    name: "FRANCISCO ZACARIAS NICOLAS",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: 40386
, globalDepartment: ""  },
  {
    id: 739,
    parentId: 500,
    name: "LUIS FERNANDO HERNANDEZ ANTONIO",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "INGENIERO CONTROL DE PROYECTOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 740,
    parentId: 140,
    name: "ADAN GOMEZ SANCHEZ",
    department: "BI P&O PEOPLE SERVICES",
    positionName: "ANALISTA SERVICIOS A PERSONAS PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 741,
    parentId: 953,
    name: "JUAN CARLOS HERNANDEZ ZETINA",
    department: "BI MAINTENANCE PLANNING",
    positionName: "TECNICO MANTENIMIENTO II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 742,
    parentId: 671,
    name: "ARIZANDY DE JESUS RAMOS MENDEZ",
    department: "LABORATORY I",
    positionName: "AUXILIAR DE LABORATORIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 743,
    parentId: 671,
    name: "ERICK GUILLERMO ORTEGA LOPEZ",
    department: "LABORATORY I",
    positionName: "AUXILIAR DE LABORATORIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 744,
    parentId: 299,
    name: "JORGE LUIS AZCONA ELIAS",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 745,
    parentId: 671,
    name: "JOSE LUIS PALMEROS BELTRAN",
    department: "LABORATORY I",
    positionName: "AUXILIAR DE LABORATORIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 746,
    parentId: 569,
    name: "JOSE LUIS TEXNA MARCIAL",
    department: "OPERATIONS IT MEXICO",
    positionName: "TECNICO DE SOPORTE TI",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 747,
    parentId: 500,
    name: "CARLOS BALCAZAR RIVEROLL",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "INGENIERO DE PROYECTOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 748,
    parentId: 500,
    name: "ALEJANDRO MELO PATRACA",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "INGENIERO DE PROYECTOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 749,
    parentId: 500,
    name: "MARCELO APOLINAR VAZQUEZ",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "INGENIERO DE PROYECTOS JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 750,
    parentId: 264,
    name: "JOSE RAMON PLACERES JESUS",
    department: "BI LABOR RELATIONSHIP",
    positionName: "ANALISTA RELACIONES LABORALES PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 751,
    parentId: 671,
    name: "MARCOS ANTONIO HERNANDEZ FLORES",
    department: "LABORATORY I",
    positionName: "AUXILIAR DE LABORATORIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 752,
    parentId: 569,
    name: "MARCOS VALDES LIMONES",
    department: "OPERATIONS IT MEXICO",
    positionName: "TECNICO DE SOPORTE TI",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 753,
    parentId: 35,
    name: "MARTIN RODRIGUEZ CARDENAS",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 754,
    parentId: 546,
    name: "MIGUEL ANGEL RODRIGUEZ GUILLEN",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 755,
    parentId: 144,
    name: "MILTHON ALEXAMDERS CALDERON SOSA",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 756,
    parentId: 572,
    name: "MOISES DE LA CRUZ IGNACIO",
    department: "BI MAINTENANCE NORTH SERVICES III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 757,
    parentId: 572,
    name: "NEMESIO CRUZ MARTINEZ",
    department: "BI MAINTENANCE NORTH SERVICES III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 758,
    parentId: 300,
    name: "ADOLFO TENORIO URIETA",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 759,
    parentId: 277,
    name: "ALEJANDRO AMBROS CUATZOZON",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 760,
    parentId: 412,
    name: "ALEXIS CHALA MOTA",
    department: "BI MAINTENANCE NORTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 761,
    parentId: 78,
    name: "ANGEL FRANCISCO CARRANCO BAEZ",
    department: "BI ETHYLENE MAINTENANCE I",
    positionName: "TECNICO EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 762,
    parentId: 244,
    name: "ANIBAL ARCIA PERERA",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 763,
    parentId: 279,
    name: "CHRISTIAN ANTONIO MENDEZ RODRIGUEZ",
    department: "ANALYTICAL AUTOMATION",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 764,
    parentId: 505,
    name: "CLAUDIA ANDREA GARCIA REYES",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 765,
    parentId: 125,
    name: "CRISTIAN EMMANUEL ROJAS AMEZCUA",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 766,
    parentId: 641,
    name: "DARVING ERNESTO GONZALEZ AGUILAR",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 767,
    parentId: 276,
    name: "DIANA FRAILE VELAZQUEZ",
    department: "BI MAINTENANCE NORTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 768,
    parentId: 277,
    name: "DIEGO ARMANDO RIOS MARIN",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 769,
    parentId: 546,
    name: "ESTEBAN PEREZ SANTIAGO",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 770,
    parentId: 244,
    name: "FELIPE DE JESUS RUIZ LANDERO",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 771,
    parentId: 402,
    name: "JESUS MIGUEL RAMOS ALEJANDRE",
    department: "BI MAINTENANCE SOUTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 772,
    parentId: 536,
    name: "ISMAEL HERNANDEZ DE LOS SANTOS",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 773,
    parentId: 279,
    name: "JONATHAN PATRACA HERNANDEZ",
    department: "ANALYTICAL AUTOMATION",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 774,
    parentId: 812,
    name: "JORDY VENTURA CORTES HERNANDEZ",
    department: "BI ETHYLENE MAINTENANCE V",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 775,
    parentId: 279,
    name: "JORGE ALBERTO DE LA CRUZ HERNANDEZ",
    department: "ANALYTICAL AUTOMATION",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: 40485
, globalDepartment: ""  },
  {
    id: 776,
    parentId: 292,
    name: "JORGE JOVANY ARENAS ARMAS",
    department: "BI ETHYLENE MAINTENANCE IV",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 777,
    parentId: 505,
    name: "JORGE LUIS DIAZ URREA",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 778,
    parentId: 536,
    name: "OMAR DE LA LUZ ALOR",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 779,
    parentId: 144,
    name: "OSCAR AMILCAR CALDERON SOSA",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 780,
    parentId: 34,
    name: "SANTIAGO ARIAS MARTINEZ",
    department: "BI MAINTENANCE SOUTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 781,
    parentId: 641,
    name: "SANTIAGO DE JESUS PEREZ FUENTES",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 782,
    parentId: 505,
    name: "VIANEY AMADOR PADUA",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 783,
    parentId: 125,
    name: "VICTOR ARMANDO MARTINEZ HERNANDEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 784,
    parentId: 279,
    name: "WALTER DE JESUS HERNANDEZ BLANCO",
    department: "ANALYTICAL AUTOMATION",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: 40481
, globalDepartment: ""  },
  {
    id: 785,
    parentId: 648,
    name: "JOSE GUADALUPE GOMEZ SANTIAGO",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 786,
    parentId: 615,
    name: "GELACIO SANCHEZ HERNANDEZ",
    department: "BI MAINTENANCE NORTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 787,
    parentId: 279,
    name: "GILBERTO GONZALEZ MALAGA",
    department: "ANALYTICAL AUTOMATION",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 788,
    parentId: 70,
    name: "GUILLERMO ISRAEL ALDANA MENDEZ",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 789,
    parentId: 35,
    name: "JOSE ANTONIO CORDOVA VARGAS",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: 40490
, globalDepartment: ""  },
  {
    id: 790,
    parentId: 244,
    name: "JOSE DE JESUS IZQUIERDO MIJANGOS",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 791,
    parentId: 0,
    name: "ULISES ALFARO MAZABA",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO PLANEACION JUNIOR",
    imageName: 40493
, globalDepartment: ""  },
  {
    id: 792,
    parentId: 641,
    name: "JOSE EDUARDO ALVAREZ VARELA",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 793,
    parentId: 78,
    name: "JUAN VELAZQUEZ MOLINA",
    department: "BI ETHYLENE MAINTENANCE I",
    positionName: "TECNICO EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 794,
    parentId: 300,
    name: "LORENZO SANTIAGO GONZALEZ",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 795,
    parentId: 402,
    name: "LUIS ABRAHAM TORRES RODRIGUEZ",
    department: "BI MAINTENANCE SOUTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 796,
    parentId: 276,
    name: "LUIS ENRIQUE ESPINOSA GUZMAN",
    department: "BI MAINTENANCE NORTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 797,
    parentId: 244,
    name: "MARCO ANTONIO GARCIA LORENZO",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 798,
    parentId: 569,
    name: "JORGE GUTIERREZ OLIVER",
    department: "OPERATIONS IT MEXICO",
    positionName: "ANALISTA SOPORTE TECNICO JUNIOR",
    imageName: 40499
, globalDepartment: ""  },
  {
    id: 799,
    parentId: 671,
    name: "DANIEL DE LA PENA OCAMPO",
    department: "LABORATORY I",
    positionName: "AUXILIAR DE LABORATORIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 800,
    parentId: 78,
    name: "MARCO ANTONIO PARADA BELTRAN",
    department: "BI ETHYLENE MAINTENANCE I",
    positionName: "TECNICO EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 801,
    parentId: 244,
    name: "GERONIMO GOMEZ SANCHEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 802,
    parentId: 244,
    name: "JOSE IVAN TRUJILLO FERNANDEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 803,
    parentId: 536,
    name: "FREDDY GUTIERREZ GUTIERREZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 804,
    parentId: 402,
    name: "OMAR EZEQUIEL DOMINGUEZ NOLASCO",
    department: "BI MAINTENANCE SOUTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 805,
    parentId: 276,
    name: "MOISES ALBINO RAMIREZ LOPEZ",
    department: "BI MAINTENANCE NORTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 806,
    parentId: 536,
    name: "MARCOS DANIEL CAMACHO GONZALEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 807,
    parentId: 536,
    name: "MICHEL RASGADO GUZMAN",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 808,
    parentId: 536,
    name: "RENE DE JESUS MAYO GONZALEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 809,
    parentId: 125,
    name: "MILTON RAUL MATUS TORRES",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 810,
    parentId: 150,
    name: "RUBEN ADRIAN CORRO ALCANTARA",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 811,
    parentId: 70,
    name: "VALENTIN ALVARADO LOPEZ",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 812,
    parentId: 582,
    name: "LUIS ANDRES ARIAS RODRIGUEZ",
    department: "BI ETHYLENE MAINTENANCE",
    positionName: "SUPERVISOR MECANICO",
    imageName: 40575
, globalDepartment: ""  },
  {
    id: 813,
    parentId: 70,
    name: "JULIO CESAR LARA RUIZ",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 814,
    parentId: 641,
    name: "VICTOR HUGO DEL VALLE OVANDO",
    department: "RELIABILITY I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 815,
    parentId: 259,
    name: "FREDERICK ENRIQUE REYES RAMOS",
    department: "BI HDPE PRODUCTION III",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 816,
    parentId: 505,
    name: "ABRAHAM MENDEZ GOMEZ",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 817,
    parentId: 35,
    name: "JUAN MONTES GARDUZA",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 818,
    parentId: 244,
    name: "ANTONIO VAZQUEZ RODRIGUEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 819,
    parentId: 569,
    name: "MARIA DE LOS ANGELES GARDUNO PRIMAVERA",
    department: "OPERATIONS IT MEXICO",
    positionName: "ANALISTA SOPORTE TECNICO JUNIOR",
    imageName: 40643
, globalDepartment: ""  },
  {
    id: 820,
    parentId: 299,
    name: "ADRIAN COLIN AGUILAR",
    department: "BI ETHYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 821,
    parentId: 299,
    name: "JOSE DELFIN SOLIS",
    department: "BI ETHYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 822,
    parentId: 35,
    name: "ARTURO ALVARADO SANTOS",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 823,
    parentId: 35,
    name: "GENARO ADRIAN BERRONES VAZQUEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: 40629
, globalDepartment: ""  },
  {
    id: 824,
    parentId: 34,
    name: "FAUSTINO GONZALEZ HERNANDEZ",
    department: "BI MAINTENANCE SOUTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 825,
    parentId: 34,
    name: "OSCAR FABIAN MENDEZ HERNANDEZ",
    department: "BI MAINTENANCE SOUTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 826,
    parentId: 276,
    name: "ANTONIO JOSE CARLO MOGUEL ESPARZA",
    department: "BI MAINTENANCE NORTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: 40632
, globalDepartment: ""  },
  {
    id: 827,
    parentId: 412,
    name: "JOSE MANUEL ORTIZ ESCRIBANO",
    department: "BI MAINTENANCE NORTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 828,
    parentId: 412,
    name: "JOSE MENDEZ CRUZ",
    department: "BI MAINTENANCE NORTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 829,
    parentId: 812,
    name: "ALEXIS DE DIOS CRUZ",
    department: "BI ETHYLENE MAINTENANCE V",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 830,
    parentId: 812,
    name: "LUIS ALBERTO SANTIAGO GARCIA",
    department: "BI ETHYLENE MAINTENANCE V",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 831,
    parentId: 70,
    name: "EDER PIZANO TOLEDO",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 832,
    parentId: 70,
    name: "FERNANDO FAYA PEREZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 833,
    parentId: 144,
    name: "FRANCISCO JAVIER VAZQUEZ MORENO",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 834,
    parentId: 244,
    name: "PAUL DE DIOS CRUZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 835,
    parentId: 546,
    name: "VICTOR MANUEL CASTILLO JUAREZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 836,
    parentId: 546,
    name: "JESUS DAVID CRUZ SALOME",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 837,
    parentId: 572,
    name: "FIDEL CRUZ GONZALEZ",
    department: "BI MAINTENANCE NORTH SERVICES III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 838,
    parentId: 615,
    name: "JOSE CARLOS RODRIGUEZ MENDOZA",
    department: "BI MAINTENANCE NORTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 839,
    parentId: 615,
    name: "RUBEN ALEMAN CRUZ",
    department: "BI MAINTENANCE NORTH SERVICES IV",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 840,
    parentId: 349,
    name: "CITLALI ASTRID SANCHEZ MARTINEZ",
    department: "WAREHOUSE",
    positionName: "BECARIO ALMACEN GENERAL MRO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 841,
    parentId: 231,
    name: "VICTORIA SANTACRUZ MORALES",
    department: "SERVICES AND CONTRACTS I",
    positionName: "BECARIO PLANEACION Y CONTRATOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 842,
    parentId: 298,
    name: "FRANKLIN ROMERO MARTINEZ",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 843,
    parentId: 332,
    name: "HILDA MARIEL DURAN VAZQUEZ",
    department: "BI TECHNICHAL LABORATORY",
    positionName: "BECARIO LABORATORIO DE SERVICIOS TECNICO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 844,
    parentId: 495,
    name: "ALITZEL ROCHA ALCANTARA",
    department: "LABORATORY II",
    positionName: "BECARIO LABORATORIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 845,
    parentId: 55,
    name: "DIANA CAROLINA ARMENTA SANCHEZ",
    department: "MATERIALS, SERVICES AND CONTRACTS",
    positionName: "BECARIO PROCURA MRO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 846,
    parentId: 581,
    name: "ANAYANSI AGUILAR FERNANDEZ",
    department: "BI HDPE PRODUCTION",
    positionName: "BECARIO PRODUCCION PEAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 847,
    parentId: 670,
    name: "JARED ARMANDO MONDRAGON SALAZAR",
    department: "BI LDPE PRODUCTION",
    positionName: "BECARIO PRODUCCION PEBD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 848,
    parentId: 673,
    name: "LUZ YESENIA CALDELAS LOPEZ",
    department: "BI IMPORTED ETHANE OPERATION",
    positionName: "BECARIO OPERACION ETANO IMPORTADO",
    imageName: 40669
, globalDepartment: ""  },
  {
    id: 849,
    parentId: 103,
    name: "DENISSE MICHELLE PALOMERA VALLEJO",
    department: "BI TRANSPORTATION MANAGEMENT",
    positionName: "BECARIO LOGISTICA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 850,
    parentId: 116,
    name: "SARAI LOPEZ AMADOR",
    department: "COMPLIANCE MEXICO",
    positionName: "BECARIO COMPLIANCE",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 851,
    parentId: 189,
    name: "MARISOL AGUILAR NAVARRO",
    department: "BI COMMERCIAL PERFOR. MGNT & MKT INTEL",
    positionName: "BECARIO PROJECT FINANCE",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 852,
    parentId: 55,
    name: "RICARDO RIVAS ARENAS",
    department: "MATERIALS, SERVICES AND CONTRACTS",
    positionName: "BECARIO PROCURA MRO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 853,
    parentId: 481,
    name: "SOFIA GOMEZ ISIDRO",
    department: "BI QUALITY",
    positionName: "BECARIO CALIDAD Y PROCESOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 854,
    parentId: 0,
    name: "BRANDON CABALLERO ARELLANO",
    department: "BI PROJECT FINANCE I",
    positionName: "BECARIO PROJECT FINANCE",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 855,
    parentId: 203,
    name: "IRAN CRUZ ESCOBAR",
    department: "LEGAL & CORPORATE GOVERNANCE",
    positionName: "BECARIO LEGAL",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 856,
    parentId: 508,
    name: "AURA SALINAS MARTINEZ",
    department: "QUALITY MEXICO",
    positionName: "BECARIO CALIDAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 857,
    parentId: 569,
    name: "ITZEL YUNUEN MALFAVON SALOME",
    department: "OPERATIONS IT MEXICO",
    positionName: "ANALISTA SOPORTE TECNICO PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 858,
    parentId: 487,
    name: "IAN CARLO ALONSO GONZALEZ",
    department: "RAW MATERIAIS AND SUPPLY",
    positionName: "BECARIO INTELIGENCIA Y DESARROLLO DE PROVEEDORES",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 859,
    parentId: 416,
    name: "LORNA ZORAYA LOPEZ BANDALA",
    department: "BI TAX",
    positionName: "BECARIO IMPUESTOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 860,
    parentId: 351,
    name: "LUISA FERNANDA ARIAS PERABELES",
    department: "BI CONTROLLING & RISKS",
    positionName: "BECARIO CONTRALORIA Y RIESGOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 861,
    parentId: 96,
    name: "ERICK IVAN ANTUNEZ FLORES",
    department: "PRODUCT AND MARKET INTELIGENCE",
    positionName: "BECARIO PCR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 862,
    parentId: 164,
    name: "ERICKA LEAL CABRERA",
    department: "PRODUCT AND MARKET INTELIGENCE",
    positionName: "BECARIO INTELIGENCIA DE MERCADO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 863,
    parentId: 162,
    name: "ALAN GARCIA GARCIA",
    department: "BI STRATEGIC RAW MATERIAL AND ENGERGY",
    positionName: "BECARIO ENERGIA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 864,
    parentId: 500,
    name: "ABRAHAM ALFONSO BAEZ MARTINEZ",
    department: "BI INDUSTRIAL PLANNING",
    positionName: "BECARIO PLANEACION INDUSTRIAL",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 865,
    parentId: 170,
    name: "BRIAN ALBERTO PENA GONZALEZ",
    department: "PROCESS ENGINEERING",
    positionName: "BECARIO PROCESOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 866,
    parentId: 225,
    name: "CINTHYA NATHALY ARROYO JARAMILLO",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "BECARIO CONTRATOS Y OPERACIONES LOGISTICAS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 867,
    parentId: 70,
    name: "CARLOMAGNO BAUTISTA ORTIZ",
    department: "BI MAINTENANCE SOUTH SERVICES III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 868,
    parentId: 299,
    name: "JOSE MANUEL AMBRIZ MARQUEZ",
    department: "BI ETHYLENE MAINTENANCE II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 869,
    parentId: 300,
    name: "SURIEL MORALES GARCIA",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 870,
    parentId: 343,
    name: "DAVID MELGAR PEREZ",
    department: "SUSTAINABILITY AND CIRCULAR ECONOMY",
    positionName: "BECARIO ECONOMIA CIRCULAR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 871,
    parentId: 279,
    name: "MARIO HERNALDO GALVEZ REYES",
    department: "ANALYTICAL AUTOMATION",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 872,
    parentId: 279,
    name: "ABIGAIL MOA SANTOS",
    department: "ANALYTICAL AUTOMATION",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 873,
    parentId: 678,
    name: "FRANCISCO DANIEL CANA COLO",
    department: "BI LDPE PRODUCTION III",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 874,
    parentId: 236,
    name: "MAILYN AGLAE TORRES SALINAS",
    department: "BI PRODUCTION NORTH SERVICES IV",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 875,
    parentId: 244,
    name: "PEDRO RUIZ YANEZ",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 876,
    parentId: 551,
    name: "CECILIA DEL CARMEN ALBREZ SANCHEZ",
    department: "BI HDPE PRODUCTION VIII",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 877,
    parentId: 536,
    name: "OMAR LOPEZ JIMENEZ",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 878,
    parentId: 419,
    name: "GRIZEL VALDES AGUADO",
    department: "BI INSTITUTIONAL MARKETING",
    positionName: "ANALISTA MARKETING INSTITUCIONAL PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 879,
    parentId: 670,
    name: "AIDE ALEJANDRA AGAMA MALDONADO",
    department: "BI LDPE PRODUCTION",
    positionName: "PRACTICANTE PRODUCCION PEBD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 880,
    parentId: 0,
    name: "ALEXIS ALARCON JIMENEZ",
    department: "CONTINUOUS IMPROVEMENT & GPS",
    positionName: "PRACTICANTE MEJORA CONTINUA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 881,
    parentId: 667,
    name: "ANGEL ALFONSO HERRERA BELMAN",
    department: "BI SOCIAL RESPONSIBILITY",
    positionName: "PRACTICANTE RESPONSABILIDAD SOCIAL",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 882,
    parentId: 475,
    name: "ANTONIO RASGADO GARCIA",
    department: "BI MAINTENANCE NORTH SERVICES",
    positionName: "PRACTICANTE MANTENIMIENTO SERV NORTE",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 883,
    parentId: 157,
    name: "AURORA ANAHI ROSAS CRUZ",
    department: "MATERIALS",
    positionName: "PRACTICANTE PROCURA MRO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 884,
    parentId: 157,
    name: "ENRIQUE ABISAI PEREZ LARA",
    department: "MATERIALS",
    positionName: "PRACTICANTE PROCURA MRO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 885,
    parentId: 667,
    name: "HELENE ANAHI POSADA ANTONIO",
    department: "BI SOCIAL RESPONSIBILITY",
    positionName: "PRACTICANTE RESPONSABILIDAD SOCIAL",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 886,
    parentId: 474,
    name: "JESSICA JAZMIN GUTIERREZ SALVA",
    department: "BI ETHYLENE PRODUCTION",
    positionName: "PRACTICANTE PRODUCCION ETILENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 887,
    parentId: 671,
    name: "JESUS ALBERTO BARRAGAN MARTINEZ",
    department: "LABORATORY I",
    positionName: "PRACTICANTE LABORATORIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 888,
    parentId: 479,
    name: "JUMAIRA RAMIREZ LUIS",
    department: "BI PRODUCTION NORTH SERVICES",
    positionName: "PRACTICANTE PRODUCCION SERVICIOS NORTE",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 889,
    parentId: 0,
    name: "YAN CARLOS ALBERTO SANCHEZ CORTES",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO PLANEACION PLENO",
    imageName: 40830
, globalDepartment: ""  },
  {
    id: 890,
    parentId: 319,
    name: "SILVIA ANGELICA MENENDEZ CARDONA",
    department: "RAW MATERIAIS AND SUPPLY",
    positionName: "ANALISTA PROCURA Y SUMINISTRO SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 891,
    parentId: 225,
    name: "SAMANTHA PAOLA ACUA GALICIA",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "ANALISTA LOGISTICA JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 892,
    parentId: 150,
    name: "EDI GABRIEL GARCIA CELAYA",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 893,
    parentId: 812,
    name: "FREDI GONZALEZ SANTIAGO",
    department: "BI ETHYLENE MAINTENANCE V",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 894,
    parentId: 333,
    name: "MONTSERRAT TERESITA TOLEDO CONTRERAS",
    department: "BI DEMAND PLANNING",
    positionName: "ANALISTA PLANEACION DE DISTRIBUCION JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 895,
    parentId: 694,
    name: "GUILLERMO GOMEZ LEON",
    department: "BI TREASURY I",
    positionName: "COORDINADOR TESORERIA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 896,
    parentId: 148,
    name: "VICTOR HUGO RIVERA VICENTE",
    department: "BI ETHYLENE MAINTENANCE",
    positionName: "PRACTICANTE MANTENIMIENTO ETILENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 897,
    parentId: 581,
    name: "URIEL CAHUICH CRUZ",
    department: "BI HDPE PRODUCTION",
    positionName: "PRACTICANTE PRODUCCION PEAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 898,
    parentId: 214,
    name: "MICHELLE DEL CARMEN LOERA HERNANDEZ",
    department: "BI PROCESS SAFETY",
    positionName: "PRACTICANTE SEGURIDAD DE PROCESOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 899,
    parentId: 953,
    name: "MAYRA DANIELA VALDIVIEZO CRUZ",
    department: "BI MAINTENANCE PLANNING",
    positionName: "PRACTICANTE MANTENIMIENTO PLANEACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 900,
    parentId: 582,
    name: "CRISTIAN FERNANDO MORALES IZQUIERDO",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE",
    positionName: "PRACTICANTE MANTENIMIENTO PEBD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 901,
    parentId: 508,
    name: "ZULMY ARISBETH PACHECO GOMEZ",
    department: "QUALITY MEXICO",
    positionName: "PRACTICANTE CALIDAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 902,
    parentId: 505,
    name: "ADRIANA ESCOBAR HERNANDEZ",
    department: "RELIABILITY",
    positionName: "PRACTICANTE CONFIABILIDAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 903,
    parentId: 319,
    name: "ENDHIR STEVEN MONTOYA PALAYOT",
    department: "RAW MATERIAIS AND SUPPLY",
    positionName: "PRACTICANTE MATERIA PRIMA Y SUMINISTROS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 904,
    parentId: 171,
    name: "MANUEL EDUARDO PEREZ CABRA",
    department: "BI INTERNAL COMMUNICATION",
    positionName: "PRACTICANTE COMUNICACION INTERNA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 905,
    parentId: 140,
    name: "SAMUEL ISAI MAYO MARQUEZ",
    department: "BI P&O PEOPLE SERVICES",
    positionName: "PRACTICANTE SERVICIOS A PERSONAS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 906,
    parentId: 163,
    name: "ERICK MIGUEL ROMAN JIMENEZ",
    department: "BI INDUSTRIAL PERFORMANCE MANAGEMENT",
    positionName: "PRACTICANTE DESEMPEÑO INDUSTRIAL",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 907,
    parentId: 238,
    name: "MONICA NAYELI ORTEGA HERNANDEZ",
    department: "MONITORING I",
    positionName: "PRACTICANTE MONITORIA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 908,
    parentId: 953,
    name: "ERNESTO ESTUDILLO QUILANTAN",
    department: "BI MAINTENANCE PLANNING",
    positionName: "PRACTICANTE MANTENIMIENTO PLANEACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 909,
    parentId: 495,
    name: "LUIS ENRIQUE JUAREZ CORTEZ",
    department: "LABORATORY II",
    positionName: "PRACTICANTE LABORATORIO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 910,
    parentId: 170,
    name: "JULIO DE JESUS BARROSO MARTINEZ",
    department: "PROCESS ENGINEERING",
    positionName: "PRACTICANTE PROCESOS ETILENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 911,
    parentId: 130,
    name: "WALTER JESUS YELA DIAZ",
    department: "BI MAINTENANCE",
    positionName: "INGENIERO MANTENIMIENTO PLENO",
    imageName: 40861
, globalDepartment: ""  },
  {
    id: 912,
    parentId: 325,
    name: "KARLA CRISTINA LEZAMA HUIJARA",
    department: "BI PRODUCTION PLANNING",
    positionName: "BECARIO PLANEACION DE PRODUCCION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 913,
    parentId: 0,
    name: "ISRAEL SANTIAGO HERNANDEZ",
    department: "BI MAINTENANCE PLANNING",
    positionName: "INGENIERO PLANEACION JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 914,
    parentId: 7,
    name: "ANA CECILIA JIMENEZ RAMIREZ",
    department: "BI PAYABLE ACCOUNTS",
    positionName: "BECARIO CUENTAS POR PAGAR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 915,
    parentId: 402,
    name: "ANTONIO CARVAJAL GUTIERREZ",
    department: "BI MAINTENANCE SOUTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 916,
    parentId: 675,
    name: "LILIBETH HERNANDEZ VILLASENOR",
    department: "AUTOMATION MEXICO",
    positionName: "INGENIERO AUTOMATIZACION JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 917,
    parentId: 642,
    name: "GUSTAVO RUBIO DIAZ",
    department: "BI CUSTOMER SERVICES IM",
    positionName: "ANALISTA SERVICIO AL CLIENTE MI JUNIOR",
    imageName: 40975
, globalDepartment: ""  },
  {
    id: 918,
    parentId: 409,
    name: "DIANA LAURA PACHECO FERNANDEZ",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 919,
    parentId: 322,
    name: "ANEL VASQUEZ CASTILLO",
    department: "BI PRODUCTION NORTH SERVICES II",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 920,
    parentId: 465,
    name: "FREDDY SAUL CRUZ YEPEZ",
    department: "BI PRODUCTION SOUTH SERVICES I",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 921,
    parentId: 292,
    name: "JULIO CESAR PINEDA REYES",
    department: "BI ETHYLENE MAINTENANCE IV",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 922,
    parentId: 35,
    name: "WILLIAMS JIMENEZ VILLALOBOS",
    department: "BI HDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 923,
    parentId: 342,
    name: "AURELIO PAULINO NAVA YANEZ",
    department: "BI POLYETHYLENTE OPERATIONS",
    positionName: "PRACTICANTE PRODUCCION PEAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 924,
    parentId: 342,
    name: "CARMEN GUADALUPE GONZALEZ FRANCISCO",
    department: "BI POLYETHYLENTE OPERATIONS",
    positionName: "PRACTICANTE PRODUCCION PEAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 925,
    parentId: 55,
    name: "BELEN MUNOZ FERNANDEZ",
    department: "MATERIALS, SERVICES AND CONTRACTS",
    positionName: "BECARIO PROCURA MRO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 926,
    parentId: 7,
    name: "JIMENA SANCHEZ GUTIERREZ",
    department: "BI PAYABLE ACCOUNTS",
    positionName: "BECARIO CUENTAS POR COBRAR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 927,
    parentId: 505,
    name: "TSUNAMI DANAE MARTINEZ TRUJILLO",
    department: "RELIABILITY",
    positionName: "BECARIO CONFIABILIDAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 928,
    parentId: 675,
    name: "FABIOLA ISABEL DE LA O TRUJILLO",
    department: "AUTOMATION MEXICO",
    positionName: "BECARIO AUTOMATIZACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 929,
    parentId: 4,
    name: "MARIA PAULA VALENTI RUIZ",
    department: "BI TECHNICHAL SERVICES AND PRODUCT DEV",
    positionName: "BECARIO LABORATORIO DE SERVICIOS TECNICO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 930,
    parentId: 156,
    name: "CARLOS ENRIQUE SOTO MERCADER",
    department: "PROCESS ENGINEERING",
    positionName: "INGENIERO PROCESOS PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 931,
    parentId: 170,
    name: "ILSE ANGELICA SOLIS BENVENUTA",
    department: "INDUSTRIAL MEXICO",
    positionName: "ASISTENTE EJECUTIVA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 932,
    parentId: 150,
    name: "EDUARDO MARTINEZ REYES",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 933,
    parentId: 298,
    name: "ENRIQUE ANAYA SOTELO",
    department: "BI PRODUCTION SOUTH SERVICES II",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 934,
    parentId: 465,
    name: "HECTOR TORRES VASCONCELOS",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 935,
    parentId: 63,
    name: "KATHERYNE SANCHEZ MONTALVO",
    department: "BI PRODUCTION SOUTH SERVICES IV",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 936,
    parentId: 63,
    name: "ANA KAREN RAMIREZ BUSTOS",
    department: "BI PRODUCTION SOUTH SERVICES IV",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 937,
    parentId: 412,
    name: "ADRIAN PEREZ SANCHEZ",
    department: "BI MAINTENANCE NORTH SERVICES II",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 938,
    parentId: 52,
    name: "GAUDENCIO SANTIAGO CASTILLEJOS",
    department: "BI ETHYLENE PRODUCTION I",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 939,
    parentId: 505,
    name: "MANUEL RAMIREZ MOO",
    department: "RELIABILITY",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 940,
    parentId: 14,
    name: "OLGA CANO GARCIA",
    department: "BUSINESS SOLUTION & PROJECTS",
    positionName: "ANALISTA PROYECTOS SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 941,
    parentId: 0,
    name: "JULIAN SANTIAGO SANCHEZ",
    department: "PROCUREMENT PROCESS & PLANNING",
    positionName: "ANALISTA GESTION Y PROCESOS PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 942,
    parentId: 465,
    name: "LUIS ALBERTO MARTINEZ CRUZ",
    department: "BI PRODUCTION SOUTH SERVICES III",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 943,
    parentId: 648,
    name: "TADEO DE JESUS RAMIREZ HERNANDEZ",
    department: "BI ETHYLENE PRODUCTION III",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 944,
    parentId: 170,
    name: "FERNANDO ORTIZ GARCIA",
    department: "INDUSTRIAL MEXICO",
    positionName: "OPERADOR I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 945,
    parentId: 300,
    name: "JONATHAN RAMIREZ CRUZ",
    department: "BI MAINTENANCE SOUTH SERVICES I",
    positionName: "TECNICO MANTENIMIENTO I",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 946,
    parentId: 170,
    name: "EDGAR MIGUEL ALVIRDE HERNANDEZ",
    department: "PROCESS ENGINEERING",
    positionName: "INGENIERO PROCESOS SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 947,
    parentId: 150,
    name: "JOSE RICARDO LOPEZ COLEAZA",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 948,
    parentId: 52,
    name: "JORGE IVAN RODRIGUEZ VICENTE",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 949,
    parentId: 470,
    name: "DANIELA CRISTAL SALAZAR MORAN",
    department: "BI TRAINING",
    positionName: "BECARIO CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 950,
    parentId: 505,
    name: "JOSE ANTONIO COLIN MARTINEZ",
    department: "RELIABILITY",
    positionName: "INGENIERO ELECTRICO ESPECIALISTA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 951,
    parentId: 150,
    name: "YOHEBETH ISABEL ORDAZ JIMENEZ",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 952,
    parentId: 404,
    name: "LUIS REY MENDOZA SANTIAGO",
    department: "BI HDPE PRODUCTION VII",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 953,
    parentId: 666,
    name: "ENRIQUE CHACON IBANEZ",
    department: "BI MAINTENANCE SOUTH SERVICES",
    positionName: "SUPERINTENDENTE MANTENIMIENTO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 954,
    parentId: 689,
    name: "MARCO AUTRIQUE PEROCHENA",
    department: "BI MANAGEMENT PERFORMANCE & MKT INTEL",
    positionName: "ESPECIALISTA PROYECTOS ESTRATEGICOS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 955,
    parentId: 691,
    name: "RICARDO MUZQUIZ ZETINA",
    department: "FINANCE",
    positionName: "GERENTE DE FINANZAS",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 956,
    parentId: 264,
    name: "KARLA ALEGRIA CORPUS",
    department: "BI LABOR RELATIONSHIP",
    positionName: "PRACTICANTE RELACIONES LABORALES",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 957,
    parentId: 227,
    name: "LUIS ANTONIO MARTINEZ MARTINEZ",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 958,
    parentId: 227,
    name: "CESAR LEONARDO AGUILAR PEREZ",
    department: "BI ETHYLENE PRODUCTION II",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 959,
    parentId: 222,
    name: "FLOR IDALMA REYES ROSADO",
    department: "BI LDPE PRODUCTION I",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 960,
    parentId: 666,
    name: "MANUEL ADOLFO LOPEZ BUENROSTRO",
    department: "BI MAINTENANCE PLANNING",
    positionName: "SUPERINTENDENTE PLANEACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 961,
    parentId: 261,
    name: "IVAN MUCINO CALDERON",
    department: "BI LDPE PRODUCTION I",
    positionName: "OPERADOR III",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 962,
    parentId: 505,
    name: "HECTOR DOMINGO ALVAREZ CRUZ",
    department: "RELIABILITY",
    positionName: "PRACTICANTE CONFIABILIDAD",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 963,
    parentId: 648,
    name: "SAMUEL GONZALEZ RIOS",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 964,
    parentId: 225,
    name: "CARLOS ADRIAN BAUTISTA RANGEL",
    department: "BI LOGISTIC OPERATIONS",
    positionName: "ANALISTA LOGISTICA PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 965,
    parentId: 632,
    name: "FRANCISCO FABIAN PEREZ SANCHEZ",
    department: "BI PLANNING AND LOGISTIC CONTRACTS",
    positionName: "BECARIO CONTRATOS Y OPERACIONES LOGISTIC",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 966,
    parentId: 223,
    name: "GABRIELA GARCIA CABRERA",
    department: "BI HES",
    positionName: "ASISTENTE EJECUTIVA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 967,
    parentId: 470,
    name: "GRETEL GARDUZA GONZALEZ",
    department: "BI TRAINING",
    positionName: "ANALISTA CAPACITACION PLENO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 968,
    parentId: 505,
    name: "ERICH GUSTAVO SALAZAR CEDENO",
    department: "RELIABILITY",
    positionName: "ESPECIALISTA DE CORROSION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 969,
    parentId: 676,
    name: "LANDY NOEMI GONZALEZ GUZMAN",
    department: "BI COMPENSATION AND BENEFITS",
    positionName: "COORDINADOR NOMINA Y ADMINISTRACION DE PERSONAL",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 970,
    parentId: 507,
    name: "VICTOR JESUS AMADOR MARQUEZ",
    department: "BI TALENT ATTRACTION",
    positionName: "COORDINADOR ATRACCION DE TALENTO",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 971,
    parentId: 0,
    name: "ANDRICK LUIS RAMOS",
    department: "CONTINUOUS IMPROVEMENT & GPS",
    positionName: "PRACTICANTE MEJORA CONTINUA",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 972,
    parentId: 238,
    name: "VERONICA JESSICA GUERRERO GAMA",
    department: "MONITORING",
    positionName: "ANALISTA MEJORA DE NEGOCIO SENIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 973,
    parentId: 562,
    name: "ALEXIS JOVANI JUAN ROMO",
    department: "BI HDPE PRODUCTION VII",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 974,
    parentId: 536,
    name: "JUAN LUIS VELAZQUEZ TOLEDO",
    department: "BI LDPE POLYEHTYLENE MAINTENANCE III",
    positionName: "TECNICO EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 975,
    parentId: 236,
    name: "ALAN DE JESUS GARCIA LOPEZ",
    department: "BI PRODUCTION NORTH SERVICES IV",
    positionName: "OPERADOR II",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 976,
    parentId: 404,
    name: "VICTOR MANUEL FACUNDO GUILLEN",
    department: "BI HDPE PRODUCTION VIII",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 977,
    parentId: 227,
    name: "JESUS DEL ANGEL HERNANDEZ PEREZ",
    department: "BI ETHYLENE PRODUCTION IV",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 978,
    parentId: 409,
    name: "JESUS LOPEZ ANTONIO",
    department: "BI PRODUCTION NORTH SERVICES V",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 979,
    parentId: 150,
    name: "CARLOS ANTONIO RODRIGUEZ QUIJANO",
    department: "BI ETHYLENE PRODUCTION V",
    positionName: "OPERADOR EN CAPACITACION",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 980,
    parentId: 642,
    name: "ARANTXA GUADALUPE RODRIGUEZ DOMINGUEZ",
    department: "BI CUSTOMER SERVICES IM",
    positionName: "ANALISTA SERVICIO AL CLIENTE MI JUNIOR",
    imageName: "unknown"
, globalDepartment: ""  },
  {
    id: 981,
    parentId: 642,
    name: "PAOLA BISTRARIN HINOJOSA",
    department: "BI CUSTOMER SERVICES IM",
    positionName: "ANALISTA SERVICIO AL CLIENTE MI JUNIOR",
    imageName: "unknown"
  }
];

export default employees;
