var id = 0;

interface Data {
  id: number;
  Surname: string;
  First_name: string;
  Middle_name: string;
  Passport_ID: number;
  Passport_Series: number;
  Date_of_passport_issuance: string;
}

const dataClient: Data[] = [
    { id: ++id, Surname: 'Ерофеев', First_name: 'Артем', Middle_name: 'Георгиевич', Passport_ID: 4654, Passport_Series: 254652, Date_of_passport_issuance: '1998-11-04'},
    { id: ++id, Surname: 'Бобрик', First_name: 'Константин', Middle_name: 'Леонидович', Passport_ID: 6755, Passport_Series: 786778, Date_of_passport_issuance: '1990-11-05'},
    { id: ++id, Surname: 'Зубов', First_name: 'Иван', Middle_name: 'Савванович', Passport_ID: 5767, Passport_Series: 565489, Date_of_passport_issuance: '1996-11-06'},
    { id: ++id, Surname: 'Курбанов', First_name: 'Иннокентий', Middle_name: 'Артемович', Passport_ID: 7866, Passport_Series: 567547, Date_of_passport_issuance: '1988-11-27'},
    { id: ++id, Surname: 'Руднева', First_name: 'Ника', Middle_name: 'Фадеевна', Passport_ID: 5685, Passport_Series: 674645, Date_of_passport_issuance: '1970-11-18'},
    { id: ++id, Surname: 'Субботин', First_name: 'Василий', Middle_name: 'Тимофеевич', Passport_ID: 6756, Passport_Series: 768487, Date_of_passport_issuance: '1998-11-09'},
    { id: ++id, Surname: 'Якимов', First_name: 'Иван', Middle_name: 'Геннадьевич', Passport_ID: 5675, Passport_Series: 654566, Date_of_passport_issuance: '1995-11-10'},
    { id: ++id, Surname: 'Дрягина', First_name: 'Дарья', Middle_name: 'Себастьяновна', Passport_ID: 2434, Passport_Series: 687567, Date_of_passport_issuance: '1998-11-11'},
    { id: ++id, Surname: 'Кярбер', First_name: 'Михаил', Middle_name: 'Романович', Passport_ID: 4322, Passport_Series: 685645, Date_of_passport_issuance: '1998-11-12'},
    { id: ++id, Surname: 'Мягков', First_name: 'Давид', Middle_name: 'Иннокентиевич', Passport_ID: 1954, Passport_Series: 575746, Date_of_passport_issuance: '1998-11-13'},
    { id: ++id, Surname: 'Анисимова', First_name: 'Дарья', Middle_name: 'Фадеевна', Passport_ID: 4511, Passport_Series: 567574, Date_of_passport_issuance: '1998-11-14'},
    { id: ++id, Surname: 'Кярбер', First_name: 'Иван', Middle_name: 'Иннокентиевич', Passport_ID: 6578, Passport_Series: 562555, Date_of_passport_issuance: '1998-11-15'},
    { id: ++id, Surname: 'Якимов', First_name: 'Давид', Middle_name: 'Тимофеевич', Passport_ID: 6586, Passport_Series: 562566, Date_of_passport_issuance: '1998-11-16'},
    { id: ++id, Surname: 'Анисимова', First_name: 'Ксения', Middle_name: 'Юрьевна', Passport_ID: 5483, Passport_Series: 456245, Date_of_passport_issuance: '1998-11-17'},
    { id: ++id, Surname: 'Беленкова', First_name: 'Ольга', Middle_name: 'Михаиловна', Passport_ID: 4353, Passport_Series: 436654, Date_of_passport_issuance: '1998-11-18'},
    { id: ++id, Surname: 'Львова', First_name: 'Юлия', Middle_name: 'Дмитриевна', Passport_ID: 7923, Passport_Series: 645687, Date_of_passport_issuance: '1995-07-12'},
    { id: ++id, Surname: 'Жданов', First_name: 'Олег', Middle_name: 'Александрович', Passport_ID: 6654, Passport_Series: 754264, Date_of_passport_issuance: '1990-10-21'},
    { id: ++id, Surname: 'Ефимова', First_name: 'Полина', Middle_name: 'Егоровна', Passport_ID: 9856, Passport_Series: 564223, Date_of_passport_issuance: '1985-01-17'},
    { id: ++id, Surname: 'Жуков', First_name: 'Михаил', Middle_name: 'Платонович', Passport_ID: 6651, Passport_Series: 178554, Date_of_passport_issuance: '1997-12-01'},
    { id: ++id, Surname: 'Тарасова', First_name: 'Ева', Middle_name: 'Ильинична', Passport_ID: 3347, Passport_Series: 885527, Date_of_passport_issuance: '2002-04-10'},
  ];

  export default function GetData() {
    return dataClient; }