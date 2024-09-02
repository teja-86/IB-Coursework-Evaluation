import SvgCoursework from "../../public/icons/SvgCoursework";
import SvgQuestionBank from "../../public/icons/SvgQuestionBank";
import SvgQuiz from "../../public/icons/SvgQuiz";
import SvgStudyNotes from "../../public/icons/SvgStudyNotes";

export const links = [
  {
    href: "/coursework",
    label: "coursework",
    icon: <SvgCoursework />,
  },
  {
    href: "/",
    label: "Study Notes",
    icon: <SvgStudyNotes />,
  },
  {
    href: "/",
    label: "Question Bank",
    icon: <SvgQuestionBank />,
  },
  {
    href: "/",
    label: "Quiz",
    icon: <SvgQuiz />,
  },
];

export const EvaluationData = {
  "Tok Essay": {
    Remark: "Average",
    course: "Tok Essay",
    example: "Tok Example",
    totalWords: 7785,
    totalTime: 29.6,
    score: 12,
    color: "#F9C94D",
    total: 30,
    criterias: [
      {
        id: "A",
        name: "Understanding Knowledge Questions",
        score: 4,
        color: "#F9C94D",
        total: 10,
        headline:
          "The essay attempts to address knowledge questions related to reason as a way of knowing, but it often deviates into personal anecdotes and lacks depth in its analysis. The examples provided are not always relevant or effectively analyzed, leading to a superficial treatment of the topic. The organization is also problematic, with transitions that fail to create a coherent flow of ideas.",
        strengths: [
          "The essay includes personal engagement and examples, showing an attempt to connect the topic to real-life situations.",
          "There is an effort to consider different perspectives, such as cultural influences on reasoning.",
          "The essay touches on relevant knowledge issues, such as the role of reason in decision-making and problem-solving.",
        ],
        improvement: [
          "Focus more on analyzing the strengths and weaknesses of reason as a way of knowing, rather than recounting personal experiences.",
          "Improve the organization by ensuring that each paragraph logically follows from the previous one and directly supports the thesis.",
          "Avoid factual inaccuracies and ensure that all examples are directly relevant to the knowledge questions being explored.",
        ],
      },
      {
        id: "B",
        name: "Quality of Analysis of Knowledge Questions",
        score: 2,
        total: 10,
        color: "#F9C94D",
        headline:
          "The essay attempts to explore the strengths and weaknesses of reason as a way of knowing, but it often deviates from the main topic and lacks depth in its analysis. The examples provided are sometimes unclear and not effectively evaluated, leading to a lack of coherence in the argumentation.",
        strengths: [
          "The essay includes personal experiences to illustrate points, showing personal engagement.",
          "There is an attempt to address both strengths and weaknesses of reason.",
          "The essay tries to incorporate different areas of knowledge, such as mathematics and cultural perspectives.",
        ],
        improvement: [
          "Avoid deviating into unrelated topics, such as emotions, unless they are directly tied to the discussion of reason.",
          "Improve the organization of the essay to ensure that each paragraph flows logically from one to the next.",
          "Avoid deviating into unrelated topics, such as emotions, unless they are directly tied to the discussion of reason.",
        ],
      },
      {
        id: "C",
        name: "Clarity and Structure",
        score: 6,
        color: "#3BC289",
        total: 10,
        headline:
          "The essay demonstrates some effort to engage with the topic and includes personal experiences to illustrate points. However, it lacks clear structure and coherence, with many paragraphs not logically connected. The analysis of knowledge issues is often superficial and lacks depth.",
        strengths: [
          "The essay includes personal experiences and attempts to relate them to the topic.",
          "There is an effort to address different perspectives on the issue.",
          "Some relevant knowledge issues are identified.",
        ],
        improvement: [
          "Provide more in-depth analysis and justification for claims made.",
          "Clarify the transitions between different sections to enhance coherence.",
          "Ensure that examples directly support the arguments being made and are clearly explained.",
        ],
      },
    ],
  },
  "Business Management": {
    Remark: "Poor",
    course: "Extended Essay",
    example: "IO Example",
    totalWords: 2213,
    totalTime: 8.4,
    color: "#EB751F",
    score: 6,
    total: 28,
    criterias: [
      {
        id: "A",
        name: "Focus and Method",
        score: 2,
        color: "#F9C94D",
        total: 6,
        headline:
          "The essay lacks a specific and sharply focused research question, which is critical for a high-quality EE in business management. The title 'Business' is too broad and does not encourage analysis, evaluation, or synthesis. The methodology is not clearly defined, and the essay appears to be more descriptive than analytical.",
        strengths: ["It emphasizes the need for a focused research question."],
        improvement: [
          "Develop a specific and focused research question that addresses a particular business problem or issue.",
          "Refine the title to reflect the specific focus of the research question.",
          "Clearly outline the methodology, including the business management theories, tools, and techniques that will be used.",
        ],
      },
      {
        id: "B",
        name: "Knowledge and Understanding",
        score: 1,
        color: "#EB751F",
        total: 6,
        headline:
          "The essay provides a general overview of what an extended essay in business management should entail but lacks specific application to a particular research question. The use of business terminology is limited and not consistently applied throughout the text.",
        strengths: [
          "The essay highlights the necessity of using a range of sources for research.",
          "The essay outlines the importance of using business theory, tools, and techniques.",
        ],
        improvement: [
          "Ensure that the essay places the topic within a wider business context by discussing its impact on various business functions.",
          "Provide a specific research question and demonstrate how business theories and concepts apply to it.",
          "Include examples of how business concepts are applied in real-world scenarios to better illustrate understanding.",
        ],
      },
      {
        id: "C",
        name: "Critical Thinking",
        score: 2,
        color: "#EB751F",
        total: 12,
        headline:
          "The essay provides a broad overview of the guidelines for writing an Extended Essay in Business and Management but lacks a specific research question and detailed analysis. The content is largely descriptive and does not demonstrate critical thinking or application of business theories.",
        strengths: [
          "The essay outlines the importance of selecting a focused research question.",
          "It highlights the necessity of applying business theories, tools, and techniques.",
          "The essay emphasizes the need for a structured and analytical approach.",
        ],
        improvement: [
          "Develop a specific, clear, and focused research question relevant to business management.",
          "Incorporate detailed analysis and evaluation of business data and sources",
          "Reflect on the quality, balance, and potential biases of the sources used.",
        ],
      },
      {
        id: "D",
        name: "Presentation",
        total: 4,
        color: "#EB751F",
        score: 1,
        headline:
          "The essay lacks several key elements required for proper presentation. It does not include a title page, table of contents, or page numbers. The structure is not well-defined with sections and subheadings, and there is no bibliography or proper referencing.",
        strengths: [
          "It highlights the necessity of applying business theories, tools, and techniques.",
        ],
        improvement: [
          "Include a title page with the title of the essay, student's name, and other relevant details.",
          "Provide a well-presented bibliography and ensure all non-original material is properly referenced.",
          "Number the pages to help readers follow the content more easily.",
        ],
      },
    ],
  },
  Economics: {
    Remark: "Excellent",
    color: "#3BC289",
    course: "Extended Essay",
    example: "EE Example",
    totalWords: 6844,
    totalTime: 26.5,
    score: 10,
    total: 12,
    criterias: [
      {
        id: "A",
        name: "Focus and Method",
        score: 5,
        color: "#3BC289",
        total: 6,
        headline:
          "The essay demonstrates a clear understanding of the topic and context, applying relevant economic theories effectively. The research question is specific and focused, and the methodology is well-outlined, including both primary and secondary research. However, some areas could benefit from further refinement and clarity.",
        strengths: [
          "Effective use of both primary and secondary research.",
          "Clear application of economic theories to the real-world context.",
          "Comprehensive analysis of various factors affecting competition.",
        ],
        improvement: [
          "Ensure all economic theories and concepts are thoroughly explained for clarity.",
          "Improve the coherence and flow of the essay by refining transitions between sections.",
          "Provide more detailed explanations of the data analysis process.",
        ],
      },
      {
        id: "B",
        name: "Knowledge and Understanding",
        score: 5,
        color: "#3BC289",
        total: 6,
        headline:
          "The essay demonstrates a solid understanding of economic theory, particularly monopolistic competition, and applies it to the restaurant market in Neue-Mitte Oberhausen. The use of primary research, including surveys and interviews, is commendable and adds depth to the analysis. However, there are some inaccuracies in the application of economic models and a few areas where the integration of theory and real-world data could be improved.",
        strengths: [
          "Comprehensive use of primary research including surveys and interviews.",
          "Clear explanation of monopolistic competition and its characteristics.",
          "Integration of real-world data to support theoretical claims.",
        ],
        improvement: [
          "Ensure all economic models are accurately applied and clearly explained.",
          "Improve the integration of economic theory with real-world data for a more cohesive analysis.",
          "Clarify any ambiguous points, especially in the discussion of barriers to entry and long-term profits.",
        ],
      },
    ],
  },
  "Language And Literature": {
    Remark: "Good",
    color: "#3BC289",
    course: "Extended Essay",
    example: "EE Example",
    totalWords: 9876,
    totalTime: 37.5,
    score: 24,
    total: 34,
    criterias: [
      {
        id: "A",
        name: "Focus and Method",
        score: 4,
        color: "#3BC289",
        total: 6,
        headline:
          "The essay demonstrates a clear understanding of the topic and research question, focusing on the comparative study of Indian and Western aesthetics in literature. However, the research question could be more sharply focused, and the methodology needs further refinement to ensure the appropriateness and effectiveness of sources and methods.",
        strengths: [
          "The topic is relevant and clearly defined, focusing on a comparative study of Indian and Western aesthetics.",
          "The essay demonstrates a good understanding of both Indian and Western literary theories.",
          "The introduction provides a comprehensive overview of the subject matter.",
        ],
        improvement: [
          "Improve the methodology by clearly outlining the choice of sources and methods. Ensure that the essay includes a critical perspective on secondary sources, supporting the arguments with the views of critics.",
          "For Category 2 essays, provide a brief rationale for the pairing of texts and ensure that the comparative study is well-integrated.",
          "Ensure that the essay stays within the 4,000-word limit and remove any extraneous content that does not directly contribute to the research question",
        ],
      },
      {
        id: "B",
        name: "Knowlege and Understanding",
        score: 5,
        color: "#3BC289",
        total: 6,
        headline:
          "The essay demonstrates a thorough understanding of the topic, effectively using subject-specific terminology and concepts. It places the research within an appropriate academic context, comparing Indian and Western aesthetics. However, there are areas where the context could be more concise and focused.",
        strengths: [
          "The essay provides a detailed comparison between Indian and Western literary theories.",
          "It uses subject-specific terminology accurately and appropriately.",
          "It uses subject-specific terminology accurately and appropriately.",
        ],
        improvement: [
          "Integrate more critical engagement with the specific cultural and linguistic backgrounds of the texts.",
          "Ensure that the essay maintains a clear focus on the primary texts and their analysis rather than extensive background information.",
          "The context could be more concise, avoiding unnecessary padding, especially in the introduction.",
        ],
      },
      {
        id: "C",
        name: "Critical Thinking",
        score: 8,
        color: "#3BC289",
        total: 12,
        headline:
          "The essay demonstrates good critical thinking with clear analysis and evaluation. It effectively compares Indian and Western aesthetics, providing thorough explanations and examples. However, there are areas where the analysis could be more focused and the discussion more coherent.",
        strengths: [
          "Good use of examples to illustrate points.",
          "Well-organized structure with logical progression.",
          "Clear explanations of complex concepts like vakrokti, dhvani, and deconstruction.",
        ],
        improvement: [
          "Provide more critical evaluation of the arguments presented, especially when discussing different viewpoints.",
          "Avoid repetitive statements to maintain reader engagement and coherence.",
          "Summarize key findings more clearly in the conclusion to reflect the overall research outcomes.",
        ],
      },
      {
        id: "D",
        name: "Presentation",
        score: 2,
        color: "#3BC289",
        total: 4,
        headline:
          "The essay demonstrates an acceptable presentation but has several weaknesses. The structure is somewhat clear but lacks consistency in formatting and proper organization. The layout includes essential components but is marred by inconsistencies and errors.",
        strengths: [
          "The bibliography and references are present",
          "here is an attempt to organize the content into chapters and sections.",
          "The essay includes a title page, table of contents, and section headings.",
        ],
        improvement: [
          "Correct the title on the title page to 'Language' and ensure it is properly formatted.",
          "Ensure consistent formatting throughout the essay, including uniform spacing and alignment.",
          "Improve the table of contents by aligning the page numbers properly and ensuring all sections are listed accurately",
        ],
      },
      {
        id: "E",
        name: "Engagement",
        total: 6,
        color: "#3BC289",
        score: 5,
        headline:
          "The essay demonstrates excellent engagement with the research process. The reflections show a high degree of intellectual and personal engagement, detailing the decision-making and planning process throughout the essay. The student provides analytical and evaluative reflections, demonstrating intellectual initiative and creativity.",
        strengths: [
          "The reflections in the RPPF are detailed and show a clear understanding of the research process.",
          "The student demonstrates intellectual initiative by discussing the methods chosen and the rationale behind them.",
          "The student shows a deep personal engagement with the topic, which is evident throughout the reflections.",
        ],
        improvement: [
          "Include more specific examples of unexpected findings or challenges and how they were addressed.",
          "Reflect more on the personal and intellectual growth experienced during the research process.",
          "Provide more detailed comparisons of alternative methods considered and why they were not chosen.",
        ],
      },
    ],
  },
  Mathematics: {
    Remark: "Poor",
    score: 2,
    course: "Internal Assessment",
    example: "IA Example",
    color: "#EB751F",
    total: 20,
    totalWords: 3453,
    totalTime: 23.5,
    headline: "",
    criterias: [
      {
        id: "A",
        name: "Presentation",
        total: 4,
        color: "#EB751F",
        score: 1,
        headline:
          "The IA lacks coherence and organization. The sections are not well-defined, and the presentation is cluttered and difficult to follow.",
        strengths: [],
        improvement: [
          "Clearly define the purpose and aim of the IA in the introduction.",
          "Organize the sections with proper headings and subheadings.",
          "Ensure smooth transitions between different sections.",
        ],
      },
      {
        id: "B",
        name: "Mathematical Communication",
        total: 3,
        color: "#EB751F",
        score: 1,
        headline:
          "The mathematical communication is partially appropriate but lacks consistency and clarity. Key terms and notations are not well-defined.",
        strengths: [],
        improvement: [
          "Improve the clarity and coherence of mathematical representations such as graphs and tables.",
          "Clearly define key terms when they are first introduced.",
          "Properly format and align equations to support the mathematical argument effectively.",
        ],
      },
      {
        id: "C",
        name: "Personal Engagement",
        total: 3,
        color: "#EB751F",
        score: 0,
        headline:
          "The provided document is a math skills assessment, not an IB DP Mathematics Internal Assessment. It lacks personal engagement, initiative, and creativity required for Criterion C.",
        strengths: [],
        improvement: [
          "Replace the assessment with an actual IA that includes a mathematical exploration.",
          "Ensure the IA topic is personally meaningful and demonstrates genuine interest.",
        ],
      },
      {
        id: "D",
        name: "Reflection",
        total: 3,
        color: "#EB751F",
        score: 0,
        headline:
          "The essay does not meet the standard described by the descriptors for Criterion D: Reflection. It lacks any form of reflection, analysis, or evaluation of the mathematical exploration.",
        strengths: [],
        improvement: [
          "Reflect on the learning process, discussing challenges faced and how understanding evolved.",
          "Propose potential next steps for the investigation and assess the strengths and weaknesses of the methodology.",
          "Critically evaluate findings, discussing alternative approaches and justifying chosen methods.",
        ],
      },
      {
        id: "E",
        name: "Use of Mathematics",
        total: 6,
        color: "#EB751F",
        score: 0,
        headline:
          "The submission does not meet the standards for Criterion E: Use of Mathematics. The content is a basic math skills assessment rather than an exploration of mathematical concepts.",
        strengths: [],
        improvement: [
          "Develop a clear mathematical exploration or investigation relevant to the HL syllabus.",
          "Ensure the mathematics used is sophisticated and demonstrates thorough understanding.",
          "Provide clear explanations and justifications for all mathematical concepts and methods used.",
        ],
      },
    ],
  },
};

export const courseTypeOptions = [
  "Tok Essay",
  "Extended Essay",
  "Internal Assessment",
];

export const transitionClass =
  "transition-all duration-300 ease-in-out transform";

export const gradients = [
  "linear-gradient(90deg, #FAEDEE 0%, #FBF5ED 100%)",
  "linear-gradient(90deg, #FBF5ED 0%, #F7FAEE 100%)",
  "linear-gradient(90deg, #F7FAEE 0%, #EDF2FB 100%)",
  "linear-gradient(90deg, #EDF2FB 0%, #FAEDEE 100%)",
];
