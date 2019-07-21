import React from 'react';

class Typer extends React.Component {
  state = {
    words: [
      'Designer',
      'Briocolo',
      'Amusant',
      'Sportif',
      'Minimaliste',
      'Freelance',
      'Curieux',
      'Maniaque',
      'Passionné',
      'Geek',
      'Perspicace',
      'Ambitieux'
    ],
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 155
  };

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { isDeleting, loopNum, text, words, typingSpeed } = this.state;
    const i = loopNum % words.length;
    const fullText = words[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 50 : 155
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 500);
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    const { text } = this.state;
    return <span>{text}</span>;
  }
}

export default Typer;
