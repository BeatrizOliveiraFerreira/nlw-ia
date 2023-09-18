// import {Github, Wand2} from 'lucide-react'

// import { Button } from "./components/ui/button";
// import { Separator } from './components/ui/separator';
// import { Textarea } from './components/ui/textarea';
// import { Label } from './components/ui/label';
// import { Select, SelectContent, SelectItem, SelectValue } from './components/ui/select';
// import { SelectTrigger } from './components/ui/select';
// import React from 'react';
// import { Slider } from './components/ui/slider';
// import { VideoInputForm } from './components/ui/video-input-form';

// export function App() {
//   return (
//     <div className='min-h-screen flex flex-col'>
//       <div className="px-6 py-3 flex items-center justify-between border-b">
//         <h1 className="text-xl font-bold">upload.ai</h1>

//         <div className="flex items-center gap-3">
//           <span className="text-sn text-green-400">
//             Desenvolvido com ❤ no NLW da Rocketseat pela &nbsp;
//               <a className='text-blue-300' href="https://www.linkedin.com/in/beatriz-oliveira-ferreira-720b49288/" target='_blank'>
//                 Beatriz Oliveira Ferreira
//               </a> 
//             </span>
            
//             <Separator orientation='vertical' className='h-6' />
            
//             <Button variant="destructive">
//             <Github className='w-4 h-4 mr-2'/>
//             Github
//             </Button>
//         </div>
//       </div>

//       <main className='flex-1 p-6 flex gap-6'>
//         <div className='flex flex-col flex-1 gap-4'>
//           <div className='grid grid-rows-2 gap-4 flex-1'>
//             <Textarea 
//               className='resize-none p-4 leading-relaxed'
//               placeholder='Inclua o prompt para a IA ...' 
//               />
//             <Textarea 
//               className='resize-none p-4 leading-relaxed'
//               placeholder='Resultado gerado pela IA ...' 
//               readOnly
//               />
//           </div>
//             <p className='text-sn text-muted-foreground'>
//               Lembre-se: você pode utilizar a variável 
//               <code className='text-red-400'> {'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado
//             </p>
//         </div>
//         <aside className='w-80 space-y-6'>
//           <VideoInputForm />
//           <Separator />

//           <form className='space-y-6'>
//           <div className='space-y-2'>
//                 <Label>Prompt</Label>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder='Selecione um prompt'/>
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value='title'>Título do Youtube</SelectItem>
//                     <SelectItem value='description'>Descrição</SelectItem>
//                   </SelectContent>
//                 </Select>
                  
//               </div>
//             <div className='space-y-2'>
//                 <Label>Modelo</Label>
//                 <Select disabled defaultValue='gpt3.5'>
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
//                   </SelectContent>
//                 </Select>
//                   <span className='block text-xs text-muted-foreground italic'>
//                     Você poderá customizar essa opção em breve
//                   </span>
//               </div>




//             <Separator />

//             <div className='space-y-4'>
//                 <Label>Temperatura</Label>
//                 <Slider
//                   min={0}
//                   max={1}
//                   step={0.1}
//                 />
//                   <span className='block text-xs text-muted-foreground italic'>
//                     Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros
//                   </span>
//               </div>

//             <Separator />

//             <Button type='submit' className='w-full'>
//               Executar
//               <Wand2 className='w-4 h-4 ml-2'/>
//             </Button>
//           </form>
//         </aside>
//       </main>
//     </div>
//   )
// }




// --        ---------------------------------------    -----------------------   ------------------


import { Github, Wand2 } from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from './components/ui/video-input-form';
import { PromptSelect } from "./components/ui/prompt-select";
import { useState } from "react";
import { useCompletion } from 'ai/react'

export function App() {
  const [temperature, setTemperature] = useState(0.5)
  const [videoId, setVideoId] = useState<string | null>(null)

  const {
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
  } = useCompletion({
    api: 'http://localhost:3333/ai/complete',
    body: {
      videoId,
      temperature,
    },
    headers: {
      'Content-Type': 'application/json',
    }
  })

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
        <span className="text-sn text-green-400">
           Desenvolvido com ❤ no NLW da Rocketseat pela &nbsp;
              <a className='text-red-400' href="https://www.linkedin.com/in/beatriz-oliveira-ferreira-720b49288/" target='_blank'>
                Beatriz Oliveira Ferreira               
               </a> 
            </span>
          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
              value={input}
              onChange={handleInputChange}
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA"
              readOnly
              value={completion}
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-red-400">{`{transcription}`}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <VideoInputForm onVideoUploaded={setVideoId} />

          <Separator />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <PromptSelect onPromptSelected={setInput} />
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-sm text-muted-foreground italic">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
                value={[temperature]}
                onValueChange={value => setTemperature(value[0])}
              />
              <span className="block text-sm text-muted-foreground italic leading-relaxed">
                Valores mais altor tendem a deixar o resultado mais criativo e com possíveis erros.
              </span>
            </div>

            <Separator />

            <Button disabled={isLoading} type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}








