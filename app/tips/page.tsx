'use client'
import { useState } from 'react';
import PostIt from '@/components/PostIt';
import Modal from '@/components/Modal';
import PostItContainer from '@/components/PostItContainer';

export default function Tips() {
  const [notaAbierta, setNotaAbierta] = useState<React.ReactNode>(null);

  return (
    <>
      <PostItContainer>
        <PostIt 
        title="sapo cachero" 
        onClick={() => setNotaAbierta(<><strong>Hola</strong> <br /> Aprender un poco cada día marca la diferencia. Hay estudios que muestran que los estudiantes que hacen del aprendizaje un hábito tienen una mayor probabilidad de alcanzar sus objetivos. Reserva tiempo para aprender y recibe recordatorios con la herramienta de planificación del aprendizaje.
        </>)}>
        </PostIt>
        <PostIt title="mamaguevo cobero" onClick={() => setNotaAbierta(<><strong>Hola</strong> <br /> Aprender un poco cada día marca la diferencia. Hay estudios que muestran que los estudiantes que hacen del aprendizaje un hábito tienen una mayor probabilidad de alcanzar sus objetivos. Reserva tiempo para aprender y recibe recordatorios con la herramienta de planificación del aprendizaje.
        </>)}>
        </PostIt>
      </PostItContainer>
      <Modal isOpen={!!notaAbierta} onClose={() => setNotaAbierta(null)}>
        {notaAbierta}
      </Modal>
    </>
  );
}