const boxContent = {
    1: {
      imgSrc: 'image1.png',
      title: 'Title 1',
      text: 'Text for Box 1',
      summary: 'Summary for Box 1.'
    },
    2: {
      imgSrc: 'image2.png',
      title: 'Title 2',
      text: 'Text for Box 2',
      summary: 'Summary for Box 2.'
    },
    3: {
      imgSrc: 'image3.png',
      title: 'Title 3',
      text: 'Text for Box 3',
      summary: 'Summary for Box 3.'
    },
    4: {
      imgSrc: 'image4.png',
      title: 'Title 4',
      text: 'Text for Box 4',
      summary: 'Summary for Box 4.'
    },
    5: {
      imgSrc: 'image5.png',
      title: 'Title 5',
      text: 'Text for Box 5',
      summary: 'Summary for Box 5.'
    },
    6: {
      imgSrc: 'image6.png',
      title: 'Title 6',
      text: 'Text for Box 6',
      summary: 'Summary for Box 6.'
    },
    7: {
      imgSrc: 'image7.png',
      title: 'Title 7',
      text: 'Text for Box 7',
      summary: 'Summary for Box 7.'
    },
    8: {
      imgSrc: 'image8.png',
      title: 'Title 8',
      text: 'Text for Box 8',
      summary: 'Summary for Box 8.'
    },
    9: {
      imgSrc: 'image9.png',
      title: 'Title 9',
      text: 'Text for Box 9',
      summary: 'Summary for Box 9.'
    },
    10: {
      imgSrc: 'image10.png',
      title: 'Title 10',
      text: 'Text for Box 10',
      summary: 'Summary for Box 10.'
    }
  };

  function changeContent(boxNumber) {
    const bigImg = document.getElementById('bigImg');
    const titleElement = document.getElementById('title');
    const textElement = document.getElementById('text');
    const summaryElement = document.getElementById('summary');

    const content = boxContent[boxNumber];

    bigImg.src = content.imgSrc;
    titleElement.textContent = content.title;
    textElement.textContent = content.text;
    summaryElement.textContent = content.summary;
  }