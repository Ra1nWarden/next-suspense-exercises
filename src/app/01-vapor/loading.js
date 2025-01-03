import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton';
import { range } from '@/utils';
import React from 'react';

async function VaporExerciseSkeleton() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {range(0, 12).map((key) => <LibraryGameCardSkeleton key={key}/>)}
      </div>
    </section>
  );
}

export default VaporExerciseSkeleton;
