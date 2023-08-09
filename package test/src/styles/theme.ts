type Theme = {
  colors: {
    primary: string[];
    secondary: string[];
    black: string[];
    blue: string[];
    accent: string[];
    success: string[];
    error: string[];
    white: string[];
  };
  fontSizes: string[];
  radii: string[];
  shadows: string[];
  sizes: string[];
  space: string[];
};

export const theme: Theme = {
  colors: {
    accent: ['#F6F7FC', '#D5D9E7', '#D0D5DD', '#EAECF0'],
    primary: ['#F18315'],
    secondary: ['#1C274C'],
    black: ['#272523', '#667085'],
    blue: ['#1C274C'],
    success: ['#27AE60'],
    error: ['#E53E3E', '#FFF5F5'],
    white: ['#fff', '#FCFCFC', '#F0F5FF', '#F2F4F7', '#F9FAFB'],
  },

  fontSizes: [
    '5px', //0
    '11px', //1
    '12px', //2
    '13px', //3
    '14px', //4
    '15px', //5
    '16px', //6
    '20px', //7
    '24px', //8
    '32px', //9
    '36px', //10
    '40px', //11
    '48px', //12
    '64px', //13
    '70px', //14
    '80px', //15
    '96px', //16
  ],

  radii: [
    '5px',
    '10px',
    '20px',
    '30px',
    '40px',
    '50px',
    '60px',
    '70px',
    '80px',
    '90px',
    '100px',
  ],

  shadows: [
    '5px 4px 10px rgba(0, 0, 0, 0.25)', // Heavy Shadow
    '-4px -4px 4px rgba(186, 186, 186, 0.12), 4px 4px 10px rgba(186, 186, 186, 0.21)', // Soft Shadow
  ],

  // Layout (height, width, maxHeight, minHeight, minWidth, maxWidth, size, display, verticalAlign, overflow, overflowX, overflowY )
  sizes: [
    '5px', //0
    '10px', //1
    '15px', //2
    '20px', //3
    '25px', //4
    '30px', //5
    '35px', //6
    '40px', //7
    '45px', //8
    '50px', //9
    '55px', //10
    '60px', //11
    '65px', //12
    '70px', //13
    '75px', //14
    '80px', //15
    '85px', //16
    '90px', //17
    '95px', //18
    '100px', //19
    '105px', //20
    '110px', //21
    '115px', //22
    '120px', //23
    '125px', //24
    '130px', //25
    '135px', //26
    '140px', //27
    '145px', //28
    '150px', //29
    '155px', //30
    '160px', //31
    '165px', //32
    '170px', //33
    '175px', //34
    '180px', //35
    '185px', //36
    '190px', //37
    '195px', //38
    '200px', //39
    '205px', //40
    '210px', //41
    '215px', //42
    '220px', //43
    '225px', //44
    '230px', //45
    '235px', //46
    '240px', //47
  ],

  // Space
  space: [
    // top, right, bottom, left, margin, padding, mt, mr, mb, ml, mx, my, pt, pr, pb, pl, px, py
    '5px', //0
    '10px', //1
    '15px', //2
    '20px', //3
    '25px',
    '30px', // 5
    '35px',
    '40px',
    '45px',
    '50px',
    '55px', // 10
    '60px',
    '65px',
    '70px',
    '75px',
    '80px', //15
    '85px',
    '90px',
    '95px', //18
    '100px',
    '105px',
    '110px',
    '115px',
    '120px',
    '125px',
    '130px', // 25
    '135px',
    '140px',
    '145px',
    '150px',
    '155px',
    '160px',
    '165px', //32
    '170px',
    '175px',
    '180px',
    '185px',
    '190px',
    '195px',
    '200px',
    '205px',
    '210px',
    '215px',
    '220px',
    '225px',
    '230px', //45
    '235px',
    '240px',
  ],
};
