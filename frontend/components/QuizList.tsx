import React from 'react';

const quizzes = [
  { id: 'A', title: 'Quiz A' },
  { id: 'B', title: 'Quiz B' },
  { id: 'C', title: 'Quiz C' },
  { id: 'D', title: 'Quiz D' },
  { id: 'E', title: 'Quiz E' },
  { id: 'F', title: 'Quiz F' },
  { id: 'G', title: 'Quiz G' },
  { id: 'H', title: 'Quiz H' },
];

function QuizList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {quizzes.map((quiz) => (
        <div
          key={quiz.id}
          className="bg-green-800/30 backdrop-blur-sm p-4 rounded-lg cursor-pointer hover:bg-green-800/40 transition-colors"
        >
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=400"
            alt={quiz.title}
            className="w-full h-32 object-cover rounded-md mb-4"
          />
          <h3 className="text-white text-lg font-semibold">{quiz.title}</h3>
          <p className="text-green-200 text-sm">Informações</p>
        </div>
      ))}
    </div>
  );
}

export default QuizList;