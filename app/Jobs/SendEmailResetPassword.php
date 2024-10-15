<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendEmailResetPassword implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $name;
    protected $email;
    protected $token;

    /**
     * Create a new job instance.
     */
    public function __construct($name, $email, $token)
    {
        $this->name = $name;
        $this->email = $email;
        $this->token = $token;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $name = $this->name;
        $email = $this->email;
        $token = $this->token;

        Mail::send('mail.reset-password', ['name' => $this->name, 'token' => $this->token], function($message) use ($email) {
            $message->to($email)
                    ->from('info.risdik@jec.co.id', 'INSPIRE JEC')
                    ->bcc('info.risdik@jec.co.id', 'INSPIRE JEC')
                    ->subject('Reset Password Account INSPIRE JEC');
        });
    }
}
