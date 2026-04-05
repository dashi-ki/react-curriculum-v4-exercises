//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Daria Tolkachova';
  let age = 34;
  let hobbies = [
    'Learning programming',
    'Designing simple interfaces',
    'Learning new tech skills',
    'Reading',
  ];

  return (
    <div>
      <h1>Hi there</h1>
      <p>
        My name is {name}. I’m currently learning web development and building
        my skills in coding. I enjoy working on small projects that help me
        understand how things work and improve step by step.{' '}
      </p>
      <h5>My hobbies & interests</h5>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
