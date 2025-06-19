import { WorkflowItem } from "../types";

export const workflow: WorkflowItem[] = [
  {
    id: 1,
    title: 'Idea & Analysis',
    description: 'We begin by understanding your business objectives, target audience, and requirements to develop a strategic plan.',
    icon: 'Lightbulb',
    color: 'primary'
  },
  {
    id: 2,
    title: 'Designing',
    description: 'Our creative team designs visually appealing interfaces that align with your brand and provide exceptional user experience.',
    icon: 'Palette',
    color: "secondary"
  },
  {
    id: 3,
    title: 'Development',
    description: 'Skilled developers transform designs into functional, responsive, and scalable solutions using cutting-edge technologies.',
    icon: 'Code',
    color:'purple'
  },
  {
    id: 4,
    title: 'Testing & Launching',
    description: 'Rigorous testing ensures your product is bug-free and performs optimally before it reaches your audience.',
    icon: 'ShieldEllipsis',
    color: 'accent'
  },
];
