import { Component,OnInit } from '@angular/core';
import { FormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../core/services/post.service';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Post } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  id = '';
  title = '';
  content = '';
  


  constructor(
    private postService : PostService,
    private router : Router,
  ){}

  createPost(){
    const newPost  = {
      title : this.title,
      content : this.content
    };

    this.postService.creatPost(newPost).subscribe(()=>{
      this.router.navigate(['/posts'])
    });
  }


// HYDHDHDH
  // ngOnInit(): void {
  //   this.id = +this.route.snapshot.paramMap.get('id')!;   //récupère les paramètres de l'URL actuelle et 	extrait la valeur de id le + 	convertit de chaîne à nombre
  //   if(this.id){
  //     this.postService.getPost(this.id).subscribe(data => {    //	 GET vers le backend pour cet ID et subscribe attend la réponse et l’assigne à la variable
  //       this.post = data;
  //     })
  //   }
  // }

  // savePost():void {
  //   if(this.id){
  //     this.postService.updatePost(this.id, this.post).subscribe(()=>{
  //       this.router.navigate(['/']);
      
  //     });
  //   }else{
  //     this.postService.createPost(this.post).subscribe(()=>{
  //       this.router.navigate(['/']);
  //     });
  //   }
  // }

}
