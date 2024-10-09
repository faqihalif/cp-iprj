<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendEmailReviewApplicationList implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $name;
    protected $email;
    protected $program;

    /**
     * Create a new job instance.
     */
    public function __construct($name, $email, $program)
    {
        $this->name = $name;
        $this->email = $email;
        $this->program = $program;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $name = $this->name;
        $email = $this->email;
        $program = $this->program;

        Mail::send('mail.review-application-list', ['name' => $this->name, 'program' => $this->program], function($message) use ($email) {
            $message->to($email)
                    ->from('info.risdik@jec.co.id', 'INSPIRE JEC')
                    ->bcc('info.risdik@jec.co.id', 'INSPIRE JEC')
                    ->subject('Success! Thank you for your application.');
        });
    }
}
