export interface WeddingConfig {
  couple: {
    bride: {
      name: string;
      fullName: string;
      photo: {
        url: string;
        aspectRatio: "1:1" | "portrait";
      };
      parents: string;
      about: string;
      socialMedia: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
      };
    };
    groom: {
      name: string;
      fullName: string;
      photo: {
        url: string;
        aspectRatio: "1:1" | "portrait";
        frame?: {
          "1:1": string;
          portrait: string;
        };
      };
      parents: string;
      about: string;
      socialMedia: {
        instagram?: string;
        facebook?: string;
        twitter?: string;
      };
    };
    firstMeet: string;
    loveStory: Array<{
      date: string;
      title: string;
      description: string;
      image: string;
    }>;
  };
  event: {
    akad: {
      date: string;
      time: string;
      location: string;
      address: string;
      mapLink: string;
      dresscode?: string;
    };
    reception: {
      date: string;
      time: string;
      location: string;
      address: string;
      mapLink: string;
      dresscode?: string;
    };

    Chiguiane: {
      date: string;
      time: string;
      location: string;
      address: string;
      mapLink: string;
      dresscode?: string;
    };

    lobolo: {
      date: string;
      time: string;
      location: string;
      address: string;
      mapLink: string;
      dresscode?: string;
    };
  };
  gallery: {
    prewedding: Array<{
      url: string;
      caption: string;
    }>;
    engagement: Array<{
      url: string;
      caption: string;
    }>;
  };
  digitalEnvelope: {
    banks: Array<{
      name: string;
      accountNumber: string;
      accountHolder: string;
      logo?: string;
    }>;
    eWallets: Array<{
      name: string;
      number: string;
      logo: string;
    }>;
  };
  rsvp: {
    whatsappNumber: string;
    formFields: Array<{
      name: string;
      label: string;
      type: string;
      options?: string[];
    }>;
  };
  specialFeatures: {
    countdownTimer: boolean;
    photoBoothFrame: boolean;
    virtualGuestBook: boolean;
    giftRegistry: {
      enabled: boolean;
      items: Array<{
        title: string;
        description?: string;
        image: string;
        link?: string;
      }>;
    };
    liveStreaming: {
      enabled: boolean;
      platform: string;
      link: string;
    };
  };
}


export const themes = {
  sage: {
    primary: "#B2BEB5",
    secondary: "#E8EDE6",
    accent: "#9CAF88",
    text: "#454B1B"
  },
  dustyBlue: {
    primary: "#4F6F8F",
    secondary: "#E5EDF5",
    accent: "#8FA5BC",
    text: "#2C3E50"
  },
  softBrown: {
    primary: "#B49F89",
    secondary: "#F5E6D3",
    accent: "#DEC4A7",
    text: "#5E4B3B"
  },
  roseDust: {
    primary: "#C5AFA0",
    secondary: "#F2E9E4",
    accent: "#E6D1C5",
    text: "#8C7267"
  },
  oliveGreen: {
    primary: "#A3B18A",
    secondary: "#E9EDe4",
    accent: "#CAD2C5",
    text: "#52573D"
  }
};

export const weddingConfig = {
  couple: {
    bride: {
      name: "Marcia Nhamtumbo",
      fullName: "Nome Completo da Noiva",
      photo: {
        url: "images/couple/bride.webp",
        aspectRatio: "portrait",
        frame: {
          "1:1": "images/couple/frame-photo-1.webp",
          portrait: "images/couple/frame-photo-2.webp"
        }
      },
      parents: "Filha do Sr. Alberto Mussa e da Sra. Argentina Nhamtumbo",
      about: "Uma alma iluminada, cuja bondade e sorriso encantam a todos ao seu redor. Encontrou no seu amado o porto seguro onde os seus sonhos ganham vida.",
      socialMedia: {
        instagram: "https://instagram.com/",
        facebook: undefined,
        twitter: undefined
      }
    },
    groom: {
      name: "Stelio Bobo",
      fullName: "Nome Completo do Noivo",
      photo: {
        url: "images/couple/groom.webp",
        aspectRatio: "1:1",
        frame: {
          "1:1": "images/couple/frame-photo-1.webp",
          portrait: "images/couple/frame-photo-2.webp"
        }
      },
      parents: "Filho do Sr. Virgulino Bobo e da Sra. Joana Cuamba",
      about: "Um homem de valores firmes e coração generoso. Encontrou na sua amada a inspiração para ser a sua melhor versão todos os dias.",
      socialMedia: {
        instagram: "https://instagram.com",
        facebook: undefined,
        twitter: undefined
      }
    },
    firstMeet: "Com a bênção de Deus, a nossa jornada começa. 'O amor é paciente, o amor é bondoso... Tudo sofre, tudo crê, tudo espera, tudo suporta.' (1 Coríntios 13:4-7)",
    loveStory: [
      {
        date: "Janeiro 2022",
        title: "O Primeiro Encontro",
        description: "Sob a vontade de Deus, os nossos caminhos cruzaram-se. Somos gratos por este início.",
        image: "images/story/first-meet.webp"
      },
      {
        date: "Março 2022",
        title: "O Conhecimento",
        description: "Iniciámos o processo de nos conhecermos com intenções sinceras e respeito mútuo.",
        image: "images/gallery/prewedding-1.webp"
      },
      {
        date: "Junho 2022",
        title: "O Pedido",
        description: "Com a bênção das nossas famílias, decidimos construir um lar assente no amor, companheirismo e fé.",
        image: "images/gallery/prewedding-2.webp"
      },
      {
        date: "Dezembro 2022",
        title: "Primeiros Momentos Juntos",
        description: "Aprender a caminhar lado a lado, partilhando valores e crescendo juntos.",
        image: "images/gallery/moment-3.webp"
      },
      {
        date: "Junho 2023",
        title: "Noivado",
        description: "Com orações e o apoio dos nossos entes queridos, demos mais um passo em direção ao nosso sonho.",
        image: "images/gallery/prewedding-3.webp"
      },
      {
        date: "Futuro",
        title: "A Jornada Sagrada",
        description: "Oramos para que Deus abençoe a nossa união e nos guie nesta nova fase de vida.",
        image: "images/gallery/moment-1.webp"
      }
    ]
  },
  event: {
    akad: {
      date: "2026-01-02",
      time: "08:00",
      venue: "Conservatória do Registro Civil",
      address: "2FM5+62Q, Matola",
      mapLink: "google.com/maps?vet=10CAAQoqAOahcKEwjY05igg6WWAxUAAAAAHQAAAAAQEQ..i&rlz=1C1MDXY_pt-PTMZ1209MZ1209&pvq=Cg0vZy8xMWM1aDF0MDAx&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=mz&sa=X&ftid=0x1ee685e618d85bb3:0x9bd7365a0ed444c7",
      dresscode: "Branco / Off-White",
      additional_info: "Informações adicionais sobre a cerimónia"
    },
    chiguiane: {
      date: "2026-01-03",
      time: "08:00",
      venue: "5F8V+MG2 Jamo",
      address: "5F8V+MG2 Jamo",
      mapLink: "https://www.google.com/maps/place/25%C2%B050'00.1%22S+32%C2%B029'37.5%22E/@-25.833362,32.493758,688m/data=!3m1!1e3!4m4!3m3!8m2!3d-25.833362!4d32.493758?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
      dresscode: "Branco / Off-White",
      additional_info: "Em casa do Sr. Henrique"
    },
    lobolo: {
      date: "2026-01-01",
      time: "15:00",
      venue: "Nhochane eventos",
      address: "3GJJ+WP Matola",
      mapLink: "google.com/maps?vet=10CAAQoqAOahcKEwjY05igg6WWAxUAAAAAHQAAAAAQEQ..i&rlz=1C1MDXY_pt-PTMZ1209MZ1209&pvq=Cg0vZy8xMWM1aDF0MDAx&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=mz&sa=X&ftid=0x1ee685e618d85bb3:0x9bd7365a0ed444c7",
      dresscode: "Branco / Off-White",
      additional_info: "Informações adicionais sobre a cerimónia"
    },
    reception: {
      date: "2026-01-02",
      time: "11:00",
      venue: "Sonital Plaza",
      address: "3GQ8+44R, Matola",
      mapLink: "google.com/maps/place/Sonital+Plaza/data=!4m2!3m1!1s0x0:0xe80b218f2229ff58?sa=X&ved=1t:2428&ictx=111",
      dresscode: "Verde Sálvia / Cores Terrosas",
      additional_info: "Informações adicionais sobre a receção"
    }

  },
  digitalEnvelope: {
    banks: [
      {
        name: "Millennium BIM",
        accountNumber: "1234567890",
        accountHolder: "NOME DO TITULAR",
logo: "images/logos/bim.png"
      },
      {
        name: "BCI",
        accountNumber: "1234567899",
        accountHolder: "NOME DO TITULAR",
logo: "images/logos/bci.png"
      }
    ],
    eWallets: [
      {
        name: "M-Pesa",
        number: "840000000",
        accountHolder: "NOME DO TITULAR",
        logo: "images/logos/mpesa.png"
      },
      {
        name: "e-Mola",
        number: "860000000",
        accountHolder: "NOME DO TITULAR",
        logo: "images/logos/emola.png"
      }
    ]
  },
  gallery: {
    prewedding: [
      {
        url: '/images/gallery/optimized/prewedding-1.webp',
        caption: 'O nosso primeiro encontro - Onde tudo começou'
      },
      {
        url: '/images/gallery/optimized/prewedding-2.webp',
        caption: 'Fuga para a praia - As nossas primeiras férias'
      },
      {
        url: '/images/gallery/optimized/prewedding-3.webp',
        caption: 'Caminhadas juntos - Superando desafios'
      },
      {
        url: '/images/gallery/optimized/moment-1.webp',
        caption: 'Primeiro concerto - Partilhando o nosso amor pela música'
      }
    ]
  },
  music: {
    tracks: [
      {
        src: '/music/song1.mp3',
        title: 'Música 1',
        artist: 'Artista 1'
      }
    ]
  },
  guestBook: {
    enabled: true,
    moderationEnabled: true
  },
  rsvp: {
    enabled: true,
    deadline: "2026-12-20",
    whatsappNumber: "258846967721",
    additionalFields: [
      {
        name: "quantidade_convidados",
        label: "Quantidade de Convidados",
        type: "number"
      },
      {
        name: "confirmacao",
        label: "Confirmação de Presença",
        type: "select",
        options: ["Vou comparecer", "Não poderei comparecer", "Talvez"]
      }
    ]
  },
  specialFeatures: {
    countdownTimer: true,
    photoBoothFrame: true,
    virtualGuestBook: true,
    giftRegistry: {
      enabled: false,
      items: [
        {
          title: "Lista de Presentes",
          description: "Veja a nossa lista de desejos",
          image: "/images/registry/amazon.webp",
          link: "https://..."
        }
      ]
    },
    liveStreaming: {
      enabled: false,
      platform: "YouTube",
      link: "https://youtube.com/live/..."
    }
  }
}